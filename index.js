'use strict';

import Create from "./JS/Create/creator.js";
import Container from "./JS/Container/container.js";
import Close from "./JS/Aside/close.js";
import Resize from "./JS/Resize/resize.js"
import Dark_mod from "./JS/Mod/dark-mod.js";

export default class Index {
    constructor() {
        this.index = new Create('index', 'div', ['id'], ['index'], '', 1, document.body, false, '', '');
    
        this.dark_mod = new Dark_mod(Create, this.index.name);
        this.container = new Container(Create, this.index.name);
        this.close = new Close(Create, this.index.name);
        Resize;
        
        this.name = 'mod';
        this.value = JSON.parse(localStorage.getItem(this.name));

        this.header = document.querySelector('header');
        this.main = document.querySelector('main');
        this.aside = document.querySelector('aside');
        this.logo = document.querySelectorAll('.logo');
        this.nav = document.querySelectorAll('nav');
        this.menus = document.querySelectorAll('.menu');
        this._dark_mod = document.querySelector('.dark-mod');

        if(this.value[0]) {
            this._dark_mod.classList.add('mod-change');

            this.index.name.classList.add('dark-1');

            this.header.classList.add('dark-2');
            this.header.classList.add('dark-bd');

            this.nav[0].classList.add('dark-bd');

            this.main.classList.add('dark-bd');

            this.aside.classList.add('dark-1');
            this.aside.classList.add('dark-bd');

            this.logo[1].classList.add('dark-2');
            this.logo[1].classList.add('dark-bd');
        }
        
        if(!this.value[0]) {
            this._dark_mod.classList.remove('mod-change');

            this.index.name.classList.remove('dark-1');

            this.header.classList.remove('dark-2');
            this.header.classList.remove('dark-bd');

            this.nav[0].classList.remove('dark-bd');

            this.main.classList.remove('dark-bd');

            this.aside.classList.remove('dark-1');
            this.aside.classList.remove('dark-bd');

            this.logo[1].classList.remove('dark-2');
            this.logo[1].classList.remove('dark-bd');
        }
    }
}

const index = new Index();