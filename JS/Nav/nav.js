'use strict';

export default class Nav {
    constructor(Create, header) {
        this.nav = new Create('nav', 'nav', ['class'], ['bd-b'], '', 1, header, false, '', '');
    }
}