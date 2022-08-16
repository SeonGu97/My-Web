'use strict';

export default class Exit {
    constructor(creator, header) {
        const exit = new creator('exit', 'div', 'class', 'exit light-w-bg-exit', '', 1, header, true, 'click', e => {
            const aside = document.querySelector('aside');
            aside.classList.remove('hide-on-bush');

            let target = e.target;
            target.classList.remove('show-exit');
        });    
    }
}