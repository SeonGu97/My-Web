'use strict';

export default class Nav {
    constructor(Create, main) {
        this.nav = new Create('nav', 'nav', ['class'], ['bd-b'], '', 1, main, false, '', '');
    }
}