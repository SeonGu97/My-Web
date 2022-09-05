'use strict';

import Item from "./item.js";

export default class Project {
    constructor(creator, container) {
        const project = new creator('project', 'section', 'class', 'project', '', 1, container, false, '', '');    
        
        const item = new Item(creator, project.name);
    }
}