'use strict';

import Tree from "./tree.js";

export default class Back {
    constructor(creator, box) {
        const back = new creator('back', 'div', 'class', 'back bd-w w-mod back-w', '', 1, box, false, '', '');
   
        const tree = new Tree(creator, back.name);
    }
}