'use strict';

export default class Mod {
    constructor(creator, _index) {
        const name = 'mod';
        let value;

        if(localStorage.getItem(name) === null) {
            value = [];
            value.push(false);
        }else {
            value = JSON.parse(localStorage.getItem(name));
        }

        const index = document.querySelector('#index');
        const header = document.querySelector('header');
        const main = document.querySelector('main');
        const line = document.querySelector('.line');

        const icons = ['<i class="fa-solid fa-moon"></i> 다크모드로 보기', '<i class="bi bi-sun-fill"></i> 라이트모드로 보기'];

        const mod = new creator('mod', 'div', 'class', 'mod mod-bg-w-w', `${icons[0]}`, 1, _index, true, 'click', e => {
            let target = e.target;

            target.classList.toggle('mod-change');

            this.active(target, main, header, line, icons, name, value);
        });
   
        mod.name.addEventListener('mouseenter', e => {
            let target = e.target;

            let boolean = target.classList.contains('mod-change') ? true : false;

            if(boolean) {
                target.classList.replace('mod-bg-d-d', 'mod-bg-d-w');
            }else {
                target.classList.replace('mod-bg-w-w', 'mod-bg-w-d');
            }
        });

        mod.name.addEventListener('mouseleave', e => {
            let target = e.target;

            let boolean = target.classList.contains('mod-change') ? true : false;

            if(boolean) {
                target.classList.replace('mod-bg-d-w', 'mod-bg-d-d');
            }else {
                target.classList.replace('mod-bg-w-d', 'mod-bg-w-w');
            }
        });

        this.maintain(mod.name, main, header, line, icons, name, value);
    }

    maintain(mod, main, header, line, icons, name, value) {
        if(value[0]) {
            mod.classList.add('mod-change');
            mod.classList.replace('mod-bg-w-w', 'mod-bg-d-d');
        }else {
            mod.classList.remove('mod-change');

        }

        this.active(mod, main, header, line, icons, name, value);
    }

    active(target, main, header, line, icons, name, value) {
        let boolean = target.classList.contains('mod-change') ? true : false;

        value.push(boolean);
        value.splice(value.indexOf(value[0]), 1);

        if(value[0]) {
            index.classList.add('d-mod');
            target.classList.replace('mod-bg-w-d', 'mod-bg-d-w');
            main.classList.replace('bd-w', 'bd-d');
            main.classList.replace('light-w-bg-main', 'light-d-bg-main');
            header.classList.replace('light-w-bg-header', 'light-d-bg-header');
            line.classList.replace('bd-w', 'bd-d');

            target.innerHTML = target.innerHTML.replace(icons[0], icons[1]);
        }else {
            index.classList.remove('d-mod');
            target.classList.replace('mod-bg-d-w', 'mod-bg-w-d');
            main.classList.replace('bd-d', 'bd-w');
            main.classList.replace('light-d-bg-main', 'light-w-bg-main');
            header.classList.replace('light-d-bg-header', 'light-w-bg-header');
            line.classList.replace('bd-d', 'bd-w');

            target.innerHTML = target.innerHTML.replace(icons[1], icons[0]);
        }

        this.setStorage(name, value);
    }

    setStorage(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }
}