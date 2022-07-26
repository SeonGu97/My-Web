'use strict';

export default class Header {
    constructor(Create, container) {
        this.header = new Create('header', 'header', [''], [''], '', 1, container, false, '', '');
    }
}