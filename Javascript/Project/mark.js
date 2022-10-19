'use strict';

export default class Mark {
    constructor(creator, project) {
        const icons = ['<i class="fa-brands fa-square-js"></i>', '<i class="fa-brands fa-html5"></i>'];

        project.childNodes.forEach((element, index, array) => {
            const mark = new creator('mark', 'div', 'class', 'mark', icons[0], 1, element, false, '', '');
        });

        const marks = document.querySelectorAll('.mark');
        marks.forEach((element, index, array) => {
            array[6].innerHTML = icons[1];
            array[7].innerHTML = icons[1];
        });
    }
}