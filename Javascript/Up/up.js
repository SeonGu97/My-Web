'use strict';

export default class Up {
    constructor(creator, index) {
        const up = new creator('up', 'button', 'class', 'up mod-bg-w-w bd-w', '<i class="bi bi-arrow-bar-up"></i>', 1, index, true, 'click', e => {
            window.scrollTo('0px', '0px');
        }, false);    
    }
}