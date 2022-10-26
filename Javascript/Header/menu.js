'use strict';

export default class Menu {
    constructor(creator, nav) {
        const menu = new creator('menu', 'div', 'class', 'menu', '', 5, nav, true, 'click', e => {
            const target = e.target;
            let index = target.index + 1;
            let element = document.querySelector(`.location-${index}`);

            element.scrollIntoView({behavior: 'smooth'});
        });
        
        const menus = document.querySelectorAll('.menu');
        const array = ['Home', 'Intro', 'Skills', 'Project', 'About'];
        for(let i = 0; i < menus.length - 10; i++) {
            menus[i].innerHTML = array[i];
        }
    }
}