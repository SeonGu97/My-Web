'use strict';

import Main from "../Main/main.js";
import Aside from "../Aside/aside.js";

export default class Container {
    constructor(Create, index) {
        this.container = new Create('container', 'section', ['class'], ['container'], '', 1, index, false, '', '');
        
        this.main = new Main(Create, this.container.name);
        this.aside = new Aside(Create, this.container.name);

        this.nav = document.querySelectorAll('nav');
        this.nav.forEach(element => {
            element.firstChild.classList.add('active');
        })
    }
}