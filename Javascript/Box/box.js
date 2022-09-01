'use strict';

import Back from "./back.js";
import Front from "./front.js";
import Box_btn from "./box-btn.js";

export default class Box {
    constructor(creator, container) {
        const box = new creator('box', 'div', 'class', 'box inner-shadow', '', 1, container, false, '', '');
        
        const front = new Front(creator, box.name);
        const back = new Back(creator, box.name);
        const box_btn = new Box_btn(creator, box.name);
    }
}