'use strict';

import Menu from "./menu.js";

export default class Sign {
    constructor(creator, header) {
        const sign = new creator('sign', 'div', 'class', 'sign', '', 1, header, false, '', '');    
        const menu = new Menu(creator, sign.name);

        const array = ['Home', 'Intro', 'Skills', 'Project', 'About'];
        sign.name.childNodes.forEach((element, index) => {
            const text = document.createElement('span');
            
            element.appendChild(text);

            element.firstChild.innerText = array[index];
        });

        const nav = document.querySelectorAll('nav')[0];
        const text = document.querySelectorAll('.sign > .menu > span');

        nav.childNodes.forEach(element => {
            element.addEventListener('mouseover', e => {
                const target = e.target.index;

                text[target].style.transition = '.2s';
                text[target].style.transitionDelay = '.4s';
                text[target].style.opacity = '1';
            }, false);

            element.addEventListener('mouseleave', e => {
                const target = e.target.index;

                text[target].style.transitionDelay = '0s';
                text[target].style.opacity = '0';
            }, false);
        });
    }
}
