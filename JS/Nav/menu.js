'use strict';

export default class Menu {
    constructor(Create, nav) {
        this.menu = new Create('menu', 'div', ['class'], ['menu'], 'Menu', 4, nav, true, 'click', e => { 
            
            for(let i = 0; i < this.menus.length; i++) {
                this.menus[i].classList.remove('active');
            }

            this.target = e.target;
            this.target.classList.add('active');
        });
        
        this.menus = document.querySelectorAll('.menu');
        this.menus[0].classList.add('active');
    }
}