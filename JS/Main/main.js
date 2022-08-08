'use strict';

import Content from "../Content/content.js";
import Header from "../Header/header.js";

export default class Main {
    constructor(Create, container) {
        this.main = new Create('main', 'main', ['class'], ['bd-l bd-r'], '', 1, container, false, '', '');
    
        this.header = new Header(Create, this.main.name);
        this.content = new Content(Create, this.main.name);
    }
}