'use strict';

import Header from "../Header/header.js";
import Nav from "../Nav/nav.js";

export default class Container {
    constructor(Create, index) {
        this.container = new Create('container', 'section', ['class'], ['container'], '', 1, index, false, '', '');
    
        this.header = new Header(Create, this.container.name);
        this.nav = new Nav(Create, this.container.name);
    }
}