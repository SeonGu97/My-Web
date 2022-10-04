'use strict';

export default class Modal_exit_btn {
    constructor(creator, modal) {
        const modal_exit_btn = new creator('modal_exit_btn', 'button', 'class', 'modal-exit-btn', '<i class="bi bi-x-lg"></i>', 1, modal, true, 'click', e => {
            const modal_bg = document.querySelector('.modal-bg');
            const modal = document.querySelector('.modal');

            modal_bg.classList.replace('modal-s', 'modal-h');
            modal.classList.replace('modal-s', 'modal-h');
        });    
    }
}