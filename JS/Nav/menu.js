'use strict';

export default class Menu {
    constructor(Create, nav) {
        this.menu = new Create('menu', 'div', ['class'], ['menu'], 'Menu', 4, nav, true, 'click', e => { 
            
            for(let i = 0; i < this.menus.length; i++) {
                this.menus[i].classList.remove('active');
            }

            this.target = e.target;
            this.target.classList.add('active');

            this.effect = new Create('effect', 'span', ['class'], ['effect'], '', 1, this.target, true, 'animationend', e => {
                e.target.remove();
            });
        
            const {clientX, clientY} = e;
            const {top, left} = this.target.getBoundingClientRect();

            this.effect.name.style.setProperty('--top', `${clientY - top}px`);
            this.effect.name.style.setProperty('--left', `${clientX - left}px`);
        });
        
        this.menus = document.querySelectorAll('.menu');
        this.menus[0].classList.add('active');
    }
}