import {Dom} from './utils.js';

const utils = new Dom();

class Page {
    init = () => {
        const viewportWidth = window.innerWidth;
        if (viewportWidth < 800) {
            const loadButton = utils.findElement('#workBtn');
            loadButton.addEventListener('click', () => {
                setTimeout(() => {
                    utils.toggleClass('#hiddenWork', 'open'); 
                    utils.toggleClass('#workBtn', 'disable');  
                }, 500);
                            
            })
        } else {
            utils.toggleClass('#workBtn','disable');
            utils.toggleClass('#hiddenWork', 'disable');
        }
    }
}
export {Page}