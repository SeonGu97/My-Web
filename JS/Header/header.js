'use strict';

export default class Header {
    constructor(Create, main) {
        this.header = new Create('header', 'header', ['class'], ['bd-b'], '', 1, main, false, '', '');
    }
}