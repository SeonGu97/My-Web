'use strict';

export default class Menu {
    constructor(Create, nav) {
        this.menu = new Create('menu', 'div', ['class'], ['menu'], 'Menu', 4, nav, true, 'click', e => { 
            
            for(let i = 0; i < this.menus.length; i++) {
                this.menus[i].classList.remove('active');
                
                const {x, y, width, height} = this.menus[i].getBoundingClientRect();
                
                const radius = Math.sqrt(width * height + width * height);

                this.menus[i].style.setProperty('--diameter', radius * 2 + 'px');

                const {clientX, clientY} = e;
                const left = (clientX - x - radius) / width * 100 + '%';
                const top = (clientY - y - radius) / height * 100 + '%';

                this.menus[i].style.setProperty('--left', left);
                this.menus[i].style.setProperty('--top', top);
                this.menus[i].style.setProperty('--a', '');
                
                setTimeout(() => {
                    this.menus[i].style.setProperty('--a', 'effect 250ms linear');
                })
            }

            this.target = e.target;
            this.target.classList.add('active');
        });
        
        this.menus = document.querySelectorAll('.menu');
        this.menus[0].classList.add('active');
    }
}