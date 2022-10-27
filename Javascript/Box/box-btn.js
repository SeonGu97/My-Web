'use strict';

export default class Box_btn {
    constructor(creator, box) {
        const box_btn = new creator('box_btn', 'button', 'class', 'box-btn active-w', '<i class="bi bi-arrow-bar-left"></i>', 1, box, true, 'click', e => {
            const front = document.querySelector('.front');
            const back = document.querySelector('.back');
            const box = document.querySelector('.box');
            const mod = document.querySelector('.mod');
            const shadow_box = document.querySelector('.shadow-box');

            front.classList.toggle('open');
            back.classList.toggle('open');
            shadow_box.classList.toggle('gone');

            if(mod.classList.contains('mod-change')) {
                box.classList.replace('inner-shadow', 'd-inner-shadow');
                back.classList.replace('shadow', 'd-shadow');
            }else {
                box.classList.replace('d-inner-shadow', 'inner-shadow');
                back.classList.replace('d-shadow', 'shadow');
            }

            const target = e.target;

            target.classList.toggle('box-btn-active')
        });
    }   
}