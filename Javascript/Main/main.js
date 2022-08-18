'use strict';

import Header from "../Header/header.js";
import Line from "../line.js";
import Effect from "../Header/effect.js";

export default class Main {
    constructor(creator, index) {
        const main = new creator('main', 'main', 'class', 'bd-w light-w-bg-main', '', 1, index, false, '', '');    
    
        const header = new Header(creator, main.name);
        const line = new Line(creator, main.name);

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
                
                console.log(value[0])

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

                console.log(offsetX, offsetY)

                effect.style.setProperty('--top',`${offsetY}px`);
                effect.style.setProperty('--left',`${offsetX}px`);  

                target.appendChild(effect);
            });
        });

    }
}