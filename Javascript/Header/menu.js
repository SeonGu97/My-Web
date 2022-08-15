'use strict';

export default class Menu {
    constructor(creator, nav) {
        const menu = new creator('menu', 'div', 'class', 'menu', 'Menu', 4, nav, false, '', '');    
    }
}