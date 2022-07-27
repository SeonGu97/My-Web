'use strict';

import Menu from "./menu.js";

export default class Nav {
    constructor(Create, header) {
        this.nav = new Create('nav', 'nav', ['class'], ['bd-b'], '', 1, header, false, '', '');
    
        this.menu = new Menu(Create, this.nav.name);
    }
}