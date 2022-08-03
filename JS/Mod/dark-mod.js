'use strict';

export default class Dark_mod {
    constructor(Create, index) {
        this.icons = ['<i class="bi bi-moon-stars"></i>', '<i class="bi bi-moon-stars-fill"></i>']

        this.dark_mod = new Create('dark_mod', 'div', ['class'], ['dark-mod'], `${this.icons[1]}`, 1, index, true, 'click', e => {
            this.target = e.currentTarget;

            this.target.classList.toggle('mod-change');
        });
    }
}