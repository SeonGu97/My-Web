'use strict';

export default class Box_btn {
    constructor(creator, box) {
        const box_btn = new creator('box_btn', 'button', 'class', 'box-btn', '<< 소개', 1, box, true, 'click', () => {
            const front = document.querySelector('.front');
            const back = document.querySelector('.back');
            const box = document.querySelector('.box');
            const mod = document.querySelector('.mod');

            front.classList.toggle('open');
            back.classList.toggle('open');

            if(mod.classList.contains('mod-change')) {
                box.classList.replace('inner-shadow', 'd-inner-shadow');
                back.classList.replace('shadow', 'd-shadow');
            }else {
                box.classList.replace('d-inner-shadow', 'inner-shadow');
                back.classList.replace('d-shadow', 'shadow');
            }
        });
    }
}