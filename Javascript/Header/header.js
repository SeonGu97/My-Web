'use strict';

import Logo from "./logo.js";
import Bar from "./bar.js";
import Nav from "./nav.js";

export default class Header {
    constructor(creator, main) {
        const header = new creator('header', 'header', 'class', 'location-1 light-w-bg-header bd-w', '', 1, main, false, '', '');    
    
        const logo = new Logo(creator, header.name);
        const bar = new Bar(creator, header.name);
        const nav = new Nav(creator, header.name);
    }
}