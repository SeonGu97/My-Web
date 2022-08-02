'use strict';

export default class Close {
    constructor(Create, index) {
        this.close = new Create('close', 'div', ['class'], ['close'], '', 1, index, true, 'click', () => {
            this.close.name.classList.remove('open');
            this.aside = document.querySelector('aside');
            this.aside.classList.remove('show');
        });
    }
}