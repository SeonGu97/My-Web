'use strict';

import Picture from "./picture.js";

export default class Area_1 {
    constructor(Create, content) {
        this.area_1 = new Create('area_1', 'section', ['class'], ['area_1'], '', 1, content, false, '', '');
    
        this.picture = new Picture(Create, this.area_1.name);
    }
}