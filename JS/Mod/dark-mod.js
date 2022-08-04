'use strict';

export default class Dark_mod {
    constructor(Create, index) {
        this.icons = ['<i class="bi bi-moon-stars"></i>', '<i class="bi bi-moon-stars-fill"></i>']

        this.name = 'mod';
        this.value;

        if(localStorage.getItem(this.name) === null) {
            this.value = [];
        }else {
            this.value = JSON.parse(localStorage.getItem(this.name));
        }

        this.dark_mod = new Create('dark_mod', 'div', ['class'], ['dark-mod'], `${this.icons[1]}`, 1, index, true, 'click', e => {
            this.target = e.currentTarget;

            this.target.classList.toggle('mod-change');

            index.classList.toggle('dark-1');

            this.header = document.querySelector('header');
            this.header.classList.toggle('dark-2');
            this.header.classList.toggle('dark-bd');

            this.main = document.querySelector('main');
            this.main.classList.toggle('dark-bd');

            this.aside = document.querySelector('aside');
            this.aside.classList.toggle('dark-1');
            this.aside.classList.toggle('dark-bd');

            this.logo = document.querySelectorAll('.logo');
            this.logo[1].classList.toggle('dark-2');
            this.logo[1].classList.toggle('dark-bd');

            this.nav = document.querySelectorAll('nav');
            this.nav[0].classList.toggle('dark-bd');

            this.menus = document.querySelectorAll('.menu');

            if(this.target.classList.contains('mod-change')) {
                this.menus.forEach(element => {
                    element.classList.replace('active', 'active-dark');
                });
            }else {
                this.menus.forEach(element => {
                    element.classList.replace('active-dark', 'active');
                });
            }

            this.boolean = this.target.classList.contains('mod-change');

            this.value.splice(this.value.indexOf(this.boolean), 1);

            this.value.push(this.boolean);

            localStorage.setItem(this.name, JSON.stringify(this.value));
        });
    }
}