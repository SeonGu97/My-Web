'use strict';

import Cover from "./cover.js";
import Mark from "./mark.js";
import Item_img from "./item-img.js";
import Item_title from "./item-title.js";

export default class Item {
    constructor(creator, project) {
        const item = new creator('item', 'div', 'class', 'item project-w', '', 6, project, true, 'mouseenter', e => {
            const target = e.target;

            target.firstChild.classList.add('slide-down');
        }, false);
    
        const cover = new Cover(creator, project);
        const mark = new Mark(creator, project);

        const items = document.querySelectorAll('.item');
        items.forEach(element => {
            const item_img = new Item_img(creator, element);
        });

        const items_img = document.querySelectorAll('.item-img');
        const img = [
            'Img/item1.png',
            'Img/item2.png',
            'Img/item3.png',
            'Img/item4.png',
            'Img/item5.png',
            'Img/item6.png',
        ];

        items.forEach(element => {
            const item_title = new Item_title(creator, element);
        });

        const item_title = document.querySelectorAll('.item-title');
        const title = ['투두리스트', '게시판', '이미지 슬라이더', '풀페이지', '공 튕기기', '로그인 레이아웃'];

        for(let i = 0; i < items.length; i++) {
            items_img[i].setAttribute('src', img[i]);
            item_title[i].innerHTML = title[i];
        }
    }
}