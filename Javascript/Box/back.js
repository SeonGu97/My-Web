'use strict';

import Leaf from "./leaf.js";
import Tree from "./tree.js";

export default class Back {
    constructor(creator, box) {
        const back = new creator('back', 'div', 'class', 'back bd-w w-mod back-w', '', 1, box, false, '', '');
   
        const tree = new Tree(creator, back.name);
        const leaf = new Leaf(creator, back.name);
    }
}