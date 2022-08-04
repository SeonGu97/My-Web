'use strict';

import Menu from "./menu.js";

export default class Nav {
    constructor(Create, header) {
        this.nav = new Create('nav', 'nav', ['class'], ['bd-b'], '', 1, header, false, '', '');
    
        this.menu = new Menu(Create, this.nav.name);

        this._nav = document.querySelectorAll('nav');

        this.dark_mod = document.querySelector('.dark-mod');

        this._nav[0].childNodes.forEach(element => {
            element.addEventListener('mouseenter', e => {
                this.target = e.target;

                if(this.dark_mod.classList.contains('mod-change')) {
                    this.target.classList.add('hover-dark');
                }else {
                    this.target.classList.add('hover');
                }
            }, false);

            element.addEventListener('mouseleave', e => {
                this.target = e.target;

                if(this.dark_mod.classList.contains('mod-change')) {
                    this.target.classList.remove('hover-dark');
                }else {
                    this.target.classList.remove('hover');
                }
            }, false);
        }); 
    }
}