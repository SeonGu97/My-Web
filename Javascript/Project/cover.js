'use strict';

import Description from "./description.js";

export default class Cover {
    constructor(creator, project) {
        project.childNodes.forEach(element => {
            const cover = new creator('cover', 'div', 'class', 'cover slide-up cover-w', '', 1, element, false, '', '');
            
            const mod = document.querySelector('.mod');

            element.addEventListener('mouseenter', e => {
                const target = e.target;

                target.children[0].classList.replace('slide-up', 'slide-down');
            }, false);

            element.addEventListener('mouseleave', e => {
                const target = e.target;

                target.children[0].classList.replace('slide-down', 'slide-up');
            }, false);

            const description = new Description(creator, cover.name);
        })
    }
}