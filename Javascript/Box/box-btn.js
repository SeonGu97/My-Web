'use strict';

export default class Box_btn {
    constructor(creator, box) {
        const box_btn = new creator('box_btn', 'button', 'class', 'box-btn', 'btn', 1, box, true, 'click', () => {
            const profile = document.querySelector('.profile');
            const infor = document.querySelector('.infor');
            const intro = document.querySelector('.intro');

            profile.classList.toggle('trans-box');
            infor.classList.toggle('trans-box');
            intro.classList.toggle('inner-shadow');
            console.log(true)
        });
    }
}