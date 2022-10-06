'use strict';

import Mark from "../Project/mark.js";

export default class Modal_project {
    constructor(creator, modal) {
        const modal_project = new creator('modal_project', 'div', 'class', 'modal-project bd-w', '', 2, modal, false, '', '');
    
        const _modal_project = document.querySelectorAll('.modal-project');

        const icon = ['<i class="fa-brands fa-vuejs"></i>', '<i class="fa-brands fa-square-js"></i>'];
        const title = ['Vue3 포트폴리오', '투두리트스1'];
        const color = ['#00c853', '#ffd600'];

        _modal_project.forEach((element, index) => {
            const modal_mark = new creator('modal_mark', 'span', 'class', 'modal-mark', icon[index], 1, element, false, '', '');
            const modal_title = new creator('modal_title', 'h1', 'class', 'modal-title', title[index], 1, element, false, '', '');
        
            element.firstChild.style.color = color[index];
        });
    }
}