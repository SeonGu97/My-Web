'use strict';

export default class Item_img {
    constructor(creator, item) {
        const item_img = new creator('item_img', 'img', ['class', 'alt'], ['item-img', '프로젝트 이미지'], '', 1, item, false, '', '');
    }
}