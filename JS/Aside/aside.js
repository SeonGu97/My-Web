'use strict';

import Logo from "../Header/logo.js"
import Nav from "../Nav/nav.js";

export default class Aside {
    constructor(Create, container) {
        this.aside = new Create('aside', 'aside', ['class'], ['bd-r'], '', 1, container, false, '', '');
        
        this.logo = new Logo(Create, this.aside.name);
        this.nav = new Nav(Create, this.aside.name);
    }
}