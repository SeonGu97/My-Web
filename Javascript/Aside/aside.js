'use strict';

import Logo from "../Header/logo.js";
import Line from "../line.js";
import Nav from "../Header/nav.js";

export default class Aside {
    constructor(creator, header) {
        const aside = new creator('aside', 'aside', 'class', 'bd-w light-w-bg-aside', '', 1, header, false, '', '');    
    
        const logo = new Logo(creator, aside.name);
        const line = new Line(creator, aside.name);
        const nav = new Nav(creator, aside.name);
    }
}