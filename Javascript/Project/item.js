'use strict';

export default class Item {
    constructor(creator, project) {
        const item = new creator('item', 'div', 'class', 'item project-w', '', 6, project, false, '', '');
    }
}