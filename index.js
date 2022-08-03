'use strict';

import Create from "./JS/Create/creator.js";
import Container from "./JS/Container/container.js";
import Close from "./JS/Aside/close.js";
import Resize from "./JS/Resize/resize.js"
import Dark_mod from "./JS/Mod/dark-mod.js";

export default class Index {
    constructor() {
        this.index = new Create('index', 'div', ['id'], ['index'], '', 1, document.body, true, 'click', e => {
            
        });
    
        this.container = new Container(Create, this.index.name);
        this.close = new Close(Create, this.index.name);
        Resize;
        this.dark_mod = new Dark_mod(Create, this.index.name);
    }
}

const index = new Index();