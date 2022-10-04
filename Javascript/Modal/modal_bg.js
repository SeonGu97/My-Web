'use strict';

export default class Modal_bg {
    constructor(creator, index) {
        const modal_bg = new creator('modal_bg', 'div', 'class', 'modal-bg modal-h', '', 1, index, true, 'click', e => {
            const target = e.target;
            const modal = document.querySelector('.modal');

            target.classList.replace('modal-s', 'modal-h');
            modal.classList.replace('modal-s', 'modal-h');
        });    
    }
}