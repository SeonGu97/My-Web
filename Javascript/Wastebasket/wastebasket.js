'use strict';

export default class Wastebasket {
    constructor(creator, container) {
        const wastebasket = new creator('wastebasket', 'div', 'class', 'wastebasket', '<i class="bi bi-trash-fill"></i>', 1, container, true, 'click', e => {
            const modal = document.querySelector('.modal');
            const modal_bg = document.querySelector('.modal-bg');
            
            setTimeout(() => {
                modal.classList.replace('modal-h', 'modal-s');
                modal_bg.classList.replace('modal-h', 'modal-s');
            }, 100);
        });    
    }
}