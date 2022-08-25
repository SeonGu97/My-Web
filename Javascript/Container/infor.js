'use strict';

export default class Infor {
    constructor(creator, container) {
        const infor = new creator('infor', 'section', 'class', 'infor', '', 1, container, false, '', '');
    
        const library = new creator('library', 'ul', 'class', 'library', '', 1, infor.name, false, '', '');

        const num = 5;
        const array1 = ['이름', '생년월일', '주소', '학력', '스킬'];
        const array2 = ['강선구', '1997.12.06', '충청북도 청주시', '고등학교 졸업', 'HTML CSS JS PhotoShop'];
        for(let i = 0; i < num; i++) {
            const book = new creator('book', 'li', 'class', 'book', '', 1, library.name, false, '', '');
            const name = new creator('name', 'span', 'class', 'name', array1[i], 1, book.name, false, '', '');
            const value = new creator('value', 'span', 'class', 'value', array2[i], 1, book.name, false, '', '');
        }
    }
}