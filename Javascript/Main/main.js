'use strict';

import Container from "../Container/container.js";
import Header from "../Header/header.js";

export default class Main {
    constructor(creator, index) {
        const main = new creator('main', 'main', 'class', 'bd-w light-w-bg-main', '', 1, index, true, 'mouseover', e => {
            const target = e.target;

            if(!target.classList.contains('cover')) {
                const cover = document.querySelectorAll('.cover');
                cover.forEach(element => {
                    element.classList.remove('slide-down');
                });
            }
        }, false);    
    
        const header = new Header(creator, main.name);
        const container = new Container(creator, main.name);

        const nav = document.querySelector('nav');
        nav.childNodes.forEach(element => {
            element.addEventListener('click', e => {
                const name = 'mod';
                let value;
        
                if(localStorage.getItem(name) === null) {
                    value = [];
                }else {
                    value = JSON.parse(localStorage.getItem(name));
                }

                const effect = document.createElement('div');

                if(value[0]) {
                    effect.setAttribute('class', 'effect effect-d');
                }else {
                    effect.setAttribute('class', 'effect effect-w');
                }

                effect.addEventListener('animationend', e => {
                    e.target.remove();
                })

                let target = e.target;

                const {offsetX , offsetY} = e;

                effect.style.setProperty('--top',`${offsetY}px`);
                effect.style.setProperty('--left',`${offsetX}px`);  

                target.appendChild(effect);
            });
        });

    }
}