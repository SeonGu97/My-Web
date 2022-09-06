'use strict';

import Cover from "./cover.js";
import Mark from "./mark.js";

export default class Item {
    constructor(creator, project) {
        const item = new creator('item', 'div', 'class', 'item project-w', '', 6, project, false, '', '');
    
        const cover = new Cover(creator, project);
        const mark = new Mark(creator, project);
    }
}