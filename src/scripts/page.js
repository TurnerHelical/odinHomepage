import {Dom} from './utils.js';

const utils = new Dom();

class Page {
    init = () => {
        const viewportWidth = window.innerWidth;
        if (viewportWidth <= 800) {
            const loadButton = utils.findElement('#workBtn');
            // write logic for if workBtn is disabled, or closed, or the extracards are visible toggle the class to make it correct
            if (loadButton.classList.contains('disable')) {
                utils.toggleClass('#workBtn', 'disable')
            }
            if (loadButton.classList.contains('close')) {
                utils.toggleClass('#workBtn', 'close')
            }
            if (!utils.findElement('.extraCards').classList.contains('hiddenWork')) {
                utils.toggleClassForAll('.extraCards', 'hiddenWork');
            }
            loadButton.addEventListener('click', () => {
                setTimeout(() => {
                    utils.toggleClassForAll('.hiddenWork', 'open'); 
                    utils.toggleClass('#workBtn', 'close');
                    setTimeout(() => {
                        utils.toggleClass('#workBtn', 'disable');
                     }, 1200);
                }, 500);
                
                            
            });
        } else if (viewportWidth > 800) {
            const loadButton = utils.findElement('#workBtn');
            // if workBtn doesn't contain disable and work is hidden, this will add disable and unhide the hidden projects
            if (!loadButton.classList.contains('disable') && utils.findElement('.hiddenWork')) {
                utils.toggleClass('#workBtn','disable');
                utils.toggleClassForAll('.hiddenWork', 'hiddenWork');
            }
        } else {
            return
        }
    }
}

export {Page}

