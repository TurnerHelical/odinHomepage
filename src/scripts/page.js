import {Dom} from './utils.js';

const utils = new Dom();

class Page {
    init = () => {
        const viewportWidth = window.innerWidth;
        if (viewportWidth < 800) {
            const loadButton = utils.findElement('#workBtn');
            loadButton.addEventListener('click', () => {
                 const moreWork = utils.findElement('#hiddenWork');
                 utils.toggleClass('#hiddenWork', 'disable'); 
                 utils.toggleClass('#workBtn', 'disable');             
            })
        } else {
            utils.toggleClass('#workBtn','disable');
            utils.toggleClass('#hiddenWork', 'disable');
        }
    }
}
export {Page}