'use strict';

import Nav from "../Nav/nav.js";
import Header from "../Header/header.js";

export default class Main {
    constructor(Create, container) {
        this.main = new Create('main', 'main', [''], [''], '', 1, container, false, '', '');
    
        this.nav = new Nav(Create, this.main.name);
        this.header = new Header(Create, this.main.name);
    }
}