'use strict';

export default class Box_btn {
    constructor(creator, box) {
        const box_btn = new creator('box_btn', 'button', 'class', 'box-btn active-w', '<i class="bi bi-chevron-double-left"></i>', 1, box, true, 'click', e => {
            const front = document.querySelector('.front');
            const back = document.querySelector('.back');
            const box = document.querySelector('.box');
            const mod = document.querySelector('.mod');
            const shadow_box = document.querySelector('.shadow-box');

            front.classList.toggle('open');
            back.classList.toggle('open');
            shadow_box.classList.toggle('gone');
            e.target.classList.toggle('turn');


            if(mod.classList.contains('mod-change')) {
                box.classList.replace('inner-shadow', 'd-inner-shadow');
                back.classList.replace('shadow', 'd-shadow');
            }else {
                box.classList.replace('d-inner-shadow', 'inner-shadow');
                back.classList.replace('d-shadow', 'shadow');
            }
        });

        const delay = 2500;
        const timer = setInterval(() => {
            if(box_btn.name.classList.contains('turn')) {
                box_btn.name.classList.add('arrow-active-2');
                box_btn.name.classList.replace('arrow-active-1', 'arrow-active-2');
            }else {
                box_btn.name.classList.add('arrow-active-1');
                box_btn.name.classList.replace('arrow-active-2', 'arrow-active-1');
            }
        },delay);

        box_btn.name.addEventListener('transitionend', e => {
            if(box_btn.name.classList.contains('turn')) {
                box_btn.name.classList.remove('arrow-active-2');
                box_btn.name.classList.replace('arrow-active-1', 'arrow-active-2');
            }else {
                box_btn.name.classList.remove('arrow-active-1');
                box_btn.name.classList.replace('arrow-active-2', 'arrow-active-1');
            }
        }, false);
    }
}