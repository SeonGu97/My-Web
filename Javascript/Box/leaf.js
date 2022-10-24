'use strict';

export default class Leaf {
    constructor(creator, back) {
        const leaf = new creator('leaf', 'div', 'class', 'leaf', '', 1, back, false, '', '');
    
        const leaf_item = new creator('leaf_item', 'p', 'class', 'leaf-item', '', 3, leaf.name, false, '', '');
    
        leaf.name.childNodes.forEach(element => {
            console.log(element)
        });
    }
}