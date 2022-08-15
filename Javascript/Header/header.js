'use strict';

import Logo from "./logo.js";
import Nav from "./nav.js";

export default class Header {
    constructor(creator, main) {
        const header = new creator('header', 'header', 'class', 'light-w-bg-header', '', 1, main, false, '', '');    
    
        const logo = new Logo(creator, header.name);
        const nav = new Nav(creator, header.name);
    }
}