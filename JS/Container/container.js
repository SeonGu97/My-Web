'use strict';

import Main from "../Main/main.js";

export default class Container {
    constructor(Create, index) {
        this.container = new Create('container', 'section', ['class'], ['container'], '', 1, index, false, '', '');
        
        this.main = new Main(Create, this.container.name);
    }
}