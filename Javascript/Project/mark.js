'use strict';

export default class Mark {
    constructor(creator, project) {
        const icons = ['<i class="fa-brands fa-square-js"></i>']

        project.childNodes.forEach(element => {
            const mark = new creator('mark', 'div', 'class', 'mark', icons[0], 1, element, false, '', '');
        });
    }
}