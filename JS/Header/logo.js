'use strict';

export default class Logo {
    constructor(Create, header) {
        this.logo = new Create('logo', 'div', ['class'], ['logo'], 'My Web', 1, header, false, '', '');
    }
}