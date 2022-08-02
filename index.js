'use strict';

import Create from "./JS/Create/creator.js";
import Container from "./JS/Container/container.js";
import Close from "./JS/Aside/close.js";
import Resize from "./JS/Resize/resize.js"

export default class Index {
    constructor() {
        this.index = new Create('index', 'div', ['id'], ['index'], '', 1, document.body, true, 'click', e => {
            
        });
    
        this.container = new Container(Create, this.index.name);
        this.close = new Close(Create, this.index.name);
        Resize;
    }
}

const index = new Index();