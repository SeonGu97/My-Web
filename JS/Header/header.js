'use strict';

import Logo from "../Header/logo.js";
import Nav from "../Nav/nav.js";

export default class Header {
    constructor(Create, main) {
        this.header = new Create('header', 'header', ['class'], ['bd-b'], '', 1, main, false, '', '');
        
        this.logo = new Logo(Create, this.header.name);
        this.nav = new Nav(Create, this.header.name);
    }
}