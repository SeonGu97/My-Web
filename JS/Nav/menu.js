'use strict';

export default class Menu {
    constructor(Create, nav) {
        this.menu = new Create('menu', 'div', ['class'], ['menu'], 'Menu', 4, nav, true, 'click', e => { 
            this.nav = document.querySelectorAll('nav');
            this.menus = document.querySelectorAll('.menu');
            this.target = e.target;

            for(let i = 0; i < this.menus.length; i++) {
                this.menus[i].classList.remove('active');
                this.menus[i].classList.remove('active-dark');
                this.menus[i].index = i;
            }

            if(this.target.index >= this.nav[0].childNodes.length) {
                this.target.index -= this.nav[0].childNodes.length;
            }

            this.dark_mod = document.querySelector('.dark-mod');

            this.nav.forEach(element => {
                if(this.dark_mod.classList.contains('mod-change')) {
                    element.childNodes[this.target.index].classList.add('active-dark');
                }else {
                    element.childNodes[this.target.index].classList.add('active');
                }
            })

            this.effect = new Create('effect', 'span', ['class'], ['effect'], '', 1, this.target, true, 'animationend', e => {
                e.target.remove();
            });
        
            const {clientX, clientY} = e;
            const {top, left} = this.target.getBoundingClientRect();

            this.effect.name.style.setProperty('--top', `${clientY - top}px`);
            this.effect.name.style.setProperty('--left', `${clientX - left}px`);
        });
    }
}