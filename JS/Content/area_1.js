'use strict';

import Area_1_1 from "./area_1_1.js";
import Area_1_2 from "./area_1_2.js";
import Picture from "./picture.js";

export default class Area_1 {
    constructor(Create, content) {
        this.area_1 = new Create('area_1', 'section', ['class'], ['area_1'], '', 1, content, false, '', '');
    
        this.picture = new Picture(Create, this.area_1.name);
        this.area_1_1 = new Area_1_1(Create, this.area_1.name);
        this.area_1_2 = new Area_1_2(Create, this.area_1.name);
    }
}