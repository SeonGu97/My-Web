'use strict';

export default class Bar {
    constructor(Create, header) {
        this.bar = new Create('bar', 'div', ['class'], ['bar'], '<i class="bi bi-list"></i>', 1, header, true, 'click', e => {
            this.aside = document.querySelector('aside');

            this.aside.classList.toggle('show');
        });
    }
}