'use strict';

import Area_1 from "./area_1.js";

export default class Content {
    constructor(Create, main) {
        this.content = new Create('content', 'div', ['class'], ['content'], '', 1, main, false, '', '');
        
        this.area_1 = new Area_1(Create, this.content.name);
    }
}