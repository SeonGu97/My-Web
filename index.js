'use strict';

import Create from "./JS/Create/creator.js";
import Container from "./JS/Container/container.js";

export default class Index {
    constructor() {
        this.index = new Create('index', 'div', ['id'], ['index'], '', 1, document.body, true, 'click', e => {
            
        });
    
        this.container = new Container(Create, this.index.name);
    }
}

const index = new Index();