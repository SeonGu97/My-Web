'use strict';

export default class U_side {
    constructor(creator, wastebasket) {
        const u_side = new creator('u_side', 'div', 'class', 'u-side u-side-w bd-w', '못쓰는 프로젝트들 😂 Click!', 1, wastebasket, true, 'click', e => {
            const modal = document.querySelector('.modal');
            const modal_bg = document.querySelector('.modal-bg');
            
            modal.classList.replace('modal-h', 'modal-s');
            modal_bg.classList.replace('modal-h', 'modal-s');
        });
    }
}