'use strict';

export default class Bar {
    constructor(creator, header) {
        const bar = new creator('bar', 'div', 'class', 'bar', '<i class="bi bi-list"></i>', 1, header, true, 'click', e => {
            const aside = document.querySelector('aside');
            aside.classList.toggle('hide-on-bush');

            const exit = document.querySelector('.exit');
            exit.classList.add('show-exit');
        });    
    }
}