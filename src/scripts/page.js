import {Dom} from './utils.js';

const utils = new Dom();

class Page {
    init = () => {
        const viewportWidth = window.innerWidth;
        if (viewportWidth <= 800) {
            const loadButton = utils.findElement('#workBtn')
            loadButton.addEventListener('click', this.handleLoadMore);
        } else if (viewportWidth > 800) {
            utils.toggleClass('#workBtn', 'disable');
            utils.toggleClassForAll('.extraCards', 'hiddenWork');

    }
}

    handleLoadMore = () => {
        setTimeout(() => {
            utils.toggleClassForAll('.hiddenWork', 'open'); 
            utils.toggleClass('#workBtn', 'close');
            setTimeout(() => {
                utils.toggleClass('#workBtn', 'disable');
             }, 1200);
        }, 500);
    }


    resizeEval = () => {
        const loadButton = utils.findElement('#workBtn');
        loadButton.removeEventListener('click', this.handleLoadMore)
        if (window.innerWidth <= 800){
            if (loadButton.classList.contains('disable')) {
                utils.toggleClass('#workBtn', 'disable');
            }
            if (loadButton.classList.contains('close')) {
                utils.toggleClass('#workBtn', 'close');
            }
            if (!loadButton.classList.contains('fresh'))
                utils.toggleClass('#workBtn', 'fresh')
            
            const cards = utils.findAllElements('.extraCards')
            cards.forEach((card) => {
                if (!card.classList.contains('hiddenWork')) {
                  card.classList.add('hiddenWork');
                }
                if (card.classList.contains('open')) {
                    card.classList.remove('open')
                }
              });
            loadButton.addEventListener('click', this.handleLoadMore)
        } else {
            if (!loadButton.classList.contains('disable')) {
                utils.toggleClass('#workBtn', 'disable');
            }
            const cards = utils.findAllElements('.extraCards')
            cards.forEach((card) => {
                if (card.classList.contains('hiddenWork')) {
                  card.classList.remove('hiddenWork');
                }
              });

        }
    }
}
    
export {Page}

