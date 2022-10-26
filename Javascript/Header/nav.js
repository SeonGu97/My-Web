'use strict';

import Menu from "./menu.js";

export default class Nav {
    constructor(creator, header) {
        const nav = new creator('nav', 'nav', '', '', '', 1, header, false, '', '');
        
        const menu = new Menu(creator, nav.name);
    }
}