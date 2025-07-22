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
                    utils.toggleClass('#workBtn', 'close');
                    setTimeout(() => {
                        utils.toggleClass('#workBtn', 'disable');
                    }, 1200);
                }, 500);
                            
            })
        } else {
            utils.toggleClass('#workBtn','disable');
            utils.editAttr('#hiddenWork','class', 'cardContainer');
        }
    }
}
export {Page}