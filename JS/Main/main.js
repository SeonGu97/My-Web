'use strict';

import Header from "../Header/header.js";
import Nav from "../Nav/nav.js";

export default class Main {
    constructor(Create, container) {
        this.main = new Create('main', 'main', [''], [''], '', 1, container, false, '', '');
    
        this.header = new Header(Create, this.main.name);
        this.nav = new Nav(Create, this.main.name);
    }
}