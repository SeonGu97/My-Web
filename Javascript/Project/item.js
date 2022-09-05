'use strict';

export default class Item {
    constructor(creator, project) {
        const item = new creator('item', 'div', 'class', 'item project-w', '', 6, project, false, '', '');


        project.childNodes.forEach(element => {
            const item_img = new creator('item_img', 'div', 'class', 'item-img', '', 1, element, false, '', ''); 
        });   
    }
}