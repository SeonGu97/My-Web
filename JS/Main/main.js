'use strict';

import Header from "../Header/header.js";

export default class Main {
    constructor(Create, container) {
        this.main = new Create('main', 'main', ['class'], ['bd-l'], '', 1, container, false, '', '');
    
        this.header = new Header(Create, this.main.name);
    }
}