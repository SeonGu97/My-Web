'use strict';

export default class Item_title {
    constructor(creator, item) {
        const item_title = new creator('item_title', 'h1', 'class', 'item-title active-w', '', 1, item, false, '', '');
    }
}