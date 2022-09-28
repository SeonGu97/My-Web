'use strict';

import Cover from "./cover.js";
import Mark from "./mark.js";
import Item_img from "./item-img.js";
import Item_title from "./item-title.js";

export default class Item {
    constructor(creator, project) {
        const item = new creator('item', 'a', 'class', 'item project-w', '', 6, project, false, '', '');
    
        const cover = new Cover(creator, project);
        const mark = new Mark(creator, project);

        const items = document.querySelectorAll('.item');
        items.forEach(element => {
            const item_img = new Item_img(creator, element);
        });

        const href = [
            'https://seongu97.github.io/study/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B82/',
            'https://seongu97.github.io/study/%EA%B2%8C%EC%8B%9C%ED%8C%90-1/',
            'https://seongu97.github.io/study/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94/',
            'https://seongu97.github.io/study/%ED%92%80%ED%8E%98%EC%9D%B4%EC%A7%80/'
        ];

        const items_img = document.querySelectorAll('.item-img');
        const img = [
            '/Img/item1.png',
            '/Img/item2.png',
            '/Img/item3.png',
            '/Img/item4.png',
            '',
            '',
        ];

        items.forEach(element => {
            const item_title = new Item_title(creator, element);
        });

        const item_title = document.querySelectorAll('.item-title')
        const title = ['투두리스트', '게시판', '이미지 슬라이더', '풀페이지'];

        for(let i = 0; i < items.length; i++) {
            items[i].setAttribute('href', href[i]);
            items_img[i].setAttribute('src', img[i]);
            item_title[i].innerHTML = title[i];
        }
    }
}