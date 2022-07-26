'use strict';

import Create from "./JS/Create/creator.js";

export default class Index {
    constructor() {
        this.index = new Create('index', 'div', ['id'], ['index'], '', 1, document.body, false, '', '');
    }
}

const index = new Index();