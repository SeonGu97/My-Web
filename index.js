'use strict';

import Creator from "./Javascript/Create/creator.js";
import Main from "./Javascript/Main/main.js";
import Aside from "./Javascript/Aside/aside.js";
import Mod from "./Javascript/Mod/mod.js";
import Exit from "./Javascript/Aside/exit.js";
import Resize from "./Javascript/resize.js";

export default class Index {
    constructor(creator) {
        const index = new creator('index', 'div', 'id', 'index', '', 1, document.body, false, '', '');
        
        const main = new Main(creator, index.name);

        const aside = new Aside(creator, index.name);

        const exit = new Exit(creator, index.name);

        const mod = new Mod(creator, index.name);

        const resize = Resize;

        const nav = document.querySelectorAll('nav');

        const name = 'index';
        let value;

        if(localStorage.getItem(name) === null) {
            value = [];
        }else {
            value = JSON.parse(localStorage.getItem(name));
        }

        nav.forEach((element, index, array, thisArg) => {
            const mod = document.querySelector('.mod');
            const nav_1 = array[0].childNodes[value[0]];
            const nav_2 = array[1].childNodes[value[0]];

            element.childNodes.forEach((element, index) => {
                element.index = index;
            });

            if(mod.classList.contains('mod-change')) {
                nav_1.classList.add('active-d');
                nav_1.classList.add('active-d-bd');

                nav_2.classList.add('active-bg-d');
            }else {
                nav_1.classList.add('active-w');
                nav_1.classList.add('active-w-bd');

                nav_2.classList.add('active-w');
                nav_2.classList.add('active-bg');
            }

            element.addEventListener('click', e => {
                let target = e.target;
                
                if(target.classList.contains('menu')) {
                    value.push(target.index);
                    value.splice(value.indexOf(value[0]), 1);
                    
                    this.setStorage(name, value);
    
                    if(mod.classList.contains('mod-change')) {
                        array[0].childNodes.forEach(element => {
                            element.classList.remove('active-d');
                            element.classList.remove('active-d-bd');
                        })
        
                        array[1].childNodes.forEach(element => {
                            element.classList.remove('active-bg-d');
                        })
    
                        array[0].childNodes[target.index].classList.add('active-d');
                        array[0].childNodes[target.index].classList.add('active-d-bd');
    
                        array[1].childNodes[target.index].classList.add('active-bg-d');
                    }else {
                        array[0].childNodes.forEach(element => {
                            element.classList.remove('active-w');
                            element.classList.remove('active-w-bd');
                        })
        
                        array[1].childNodes.forEach(element => {
                            element.classList.remove('active-w');
                            element.classList.remove('active-bg');
                        })
    
                        array[0].childNodes[target.index].classList.add('active-w');
                        array[0].childNodes[target.index].classList.add('active-w-bd');
    
                        array[1].childNodes[target.index].classList.add('active-w');
                        array[1].childNodes[target.index].classList.add('active-bg');
                    }
                }
            }, false);
        });
    }

    setStorage(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }
}

const creator = Creator;

const index = new Index(creator);