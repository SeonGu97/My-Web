'use strict';

import Creator from "./Javascript/Create/creator.js";
import Main from "./Javascript/Main/main.js";
import Aside from "./Javascript/Aside/aside.js";
import Mod from "./Javascript/Mod/mod.js";
import Exit from "./Javascript/Aside/exit.js";
import Resize from "./Javascript/resize.js";
import Up from "./Javascript/Up/up.js";
import Modal from "./Javascript/Modal/modal.js";
import Modal_bg from "./Javascript/Modal/modal_bg.js";
import Scroll from "./Javascript/scroll.js";

export default class Index {
    constructor(creator) {
        const index = new creator('index', 'div', 'id', 'index', '', 1, document.body, false, '', '');
        
        const main = new Main(creator, index.name);

        const aside = new Aside(creator, index.name);

        const exit = new Exit(creator, index.name);

        const up = new Up(creator, index.name);

        const resize = Resize;

        const modal_bg = new Modal_bg(creator, index.name);

        const modal = new Modal(creator, index.name);

        const mod = new Mod(creator, index.name);

        const nav = document.querySelectorAll('nav');

        const scroll = Scroll;

        const name = 'index';
        let value;

        if(localStorage.getItem(name) === null) {
            value = [];
            value.push(0);
        }else {
            value = JSON.parse(localStorage.getItem(name));
            
            value.splice(value.indexOf(value[0]), 1);
            value.push(0);
        }

        window.scrollTo('0px', '0px');

        nav.forEach((element, index, array, thisArg) => {
            const mod = document.querySelector('.mod');
            const nav_1 = array[0].firstChild;
            const nav_2 = array[1].firstChild;

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
                setTimeout(() => {
                    let target = e.target;
                    
                    if(target.classList.contains('menu')) {
                        value.push(target.index);
                        value.splice(value.indexOf(value[0]), 1);
                        
                        this.setStorage(name, value);
        
                        if(mod.classList.contains('mod-change')) {
                            array[0].childNodes.forEach(element => {
                                element.classList.remove('active-d');
                                element.classList.remove('active-d-bd');
                            });
            
                            array[1].childNodes.forEach(element => {
                                element.classList.remove('active-d');
                                element.classList.remove('active-bg-d');
                            });
        
                            array[0].childNodes[target.index].classList.add('active-d');
                            array[0].childNodes[target.index].classList.add('active-d-bd');
                            
                            array[1].childNodes[target.index].classList.add('active-d');
                            array[1].childNodes[target.index].classList.add('active-bg-d');
                        }else {
                            array[0].childNodes.forEach(element => {
                                element.classList.remove('active-w');
                                element.classList.remove('active-w-bd');
                            });
            
                            array[1].childNodes.forEach(element => {
                                element.classList.remove('active-w');
                                element.classList.remove('active-bg');
                            });
        
                            array[0].childNodes[target.index].classList.add('active-w');
                            array[0].childNodes[target.index].classList.add('active-w-bd');
        
                            array[1].childNodes[target.index].classList.add('active-w');
                            array[1].childNodes[target.index].classList.add('active-bg');
                        }
                    }
                }, 100);
            }, false);

            this.setStorage(name, value)
        });
    }

    setStorage(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }
}

const creator = Creator;

const index = new Index(creator);