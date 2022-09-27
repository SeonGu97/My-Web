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
        const line = document.querySelectorAll('.line');
        const aside = document.querySelector('aside');
        const exit = document.querySelector('.exit');
        const nav = document.querySelectorAll('nav');
        const profile = document.querySelector('.profile');
        const picture = document.querySelector('.picture');
        const skill_icon = document.querySelectorAll('.skill-icon > .skill-name');
        const infor = document.querySelector('.infor');
        const body = document.body;
        const back = document.querySelector('.back');
        const box = document.querySelector('.box');
        const front = document.querySelector('.front');
        const box_btn = document.querySelector('.box-btn');
        const item = document.querySelectorAll('.item');
        const cover = document.querySelectorAll('.cover');
        const footer = document.querySelector('footer');
        const labels = document.querySelectorAll('label');
        const user_name = document.querySelector('.user-name');
        const message = document.querySelector('textarea');
        const submit = document.querySelector('.submit');
        const item_title = document.querySelectorAll('.item-title');

        const icons = ['<i class="fa-solid fa-moon"></i> 다크모드로 보기', '<i class="bi bi-sun-fill"></i> 라이트모드로 보기'];

        const mod = new creator('mod', 'div', 'class', 'mod mod-bg-w-w', `${icons[0]}`, 1, _index, true, 'click', e => {
            let target = e.target;

            target.classList.toggle('mod-change');

            this.active(target, main, header, line, icons, name, value, aside, exit, profile, picture, skill_icon, infor, body, back, box, front, box_btn, item, cover, footer, labels, user_name, message, submit, item_title);

            this.activeChange(nav, value);
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

        this.maintain(mod.name, main, header, line, icons, name, value, aside, exit, profile, picture, skill_icon, infor, body, back, box, front, box_btn, item, cover, footer, labels, user_name, message, submit, item_title);
    }

    maintain(mod, main, header, line, icons, name, value, aside, exit, profile, picture, skill_icon, infor, body, back, box, front, box_btn, item, cover, footer, labels, user_name, message, submit, item_title) {
        if(value[0]) {
            mod.classList.add('mod-change');
            mod.classList.replace('mod-bg-w-w', 'mod-bg-d-d');
        }else {
            mod.classList.remove('mod-change');

        }

        this.active(mod, main, header, line, icons, name, value, aside, exit, profile, picture, skill_icon, infor, body, back, box, front, box_btn, item, cover, footer, labels, user_name, message, submit, item_title);
    }

    active(target, main, header, line, icons, name, value, aside, exit, profile, picture, skill_icon, infor, body, back, box, front, box_btn, item, cover, footer, labels, user_name, message, submit, item_title) {
        let boolean = target.classList.contains('mod-change') ? true : false;

        value.push(boolean);
        value.splice(value.indexOf(value[0]), 1);

        if(value[0]) {
            body.classList.add('d-mod');
            index.classList.add('d-mod');
            target.classList.replace('mod-bg-w-d', 'mod-bg-d-w');
            main.classList.replace('bd-w', 'bd-d');
            main.classList.replace('light-w-bg-main', 'light-d-bg-main');
            header.classList.replace('light-w-bg-header', 'light-d-bg-header');
            header.classList.replace('bd-w', 'bd-d');

            for(let i = 0; i < line.length; i++) {
                line[i].classList.replace('bd-w', 'bd-d');
            }

            aside.classList.replace('light-w-bg-aside', 'light-d-bg-aside');
            aside.classList.replace('bd-w', 'bd-d');
            exit.classList.replace('light-w-bg-exit', 'light-d-bg-exit');
            profile.classList.replace('gradient-w', 'gradient-d');
            picture.classList.replace('profile-bd-w', 'profile-bd-d');

            for(let i = 0; i < skill_icon.length; i++) {
                skill_icon[i].classList.add('skill-d');
            }

            infor.classList.replace('light-w-bg-main', 'light-d-bg-main');
            back.classList.replace('w-mod', 'd-mod');
            back.classList.replace('back-w', 'back-d');
            box.classList.replace('inner-shadow', 'd-inner-shadow');
            back.classList.replace('shadow', 'd-shadow');
            back.classList.replace('bd-w', 'bd-d');
            box_btn.classList.replace('active-w', 'active-d');

            item.forEach(element => {
                element.classList.replace('project-w', 'project-d');
            });

            cover.forEach(element => {
                element.classList.replace('cover-w', 'cover-d');
            });

            footer.classList.replace('footer-w', 'footer-d');
            footer.classList.replace('bd-w', 'bd-d');

            labels.forEach(element => {
                element.classList.add('label-d');
            });

            user_name.classList.add('user-name-d');
            user_name.classList.replace('bd-w', 'bd-d');

            message.classList.add('message-d');
            message.classList.replace('bd-w', 'bd-d');

            submit.classList.replace('bd-w', 'bd-d');
            submit.classList.replace('submit-w', 'submit-d');
            
            item_title.forEach(element => {
                element.classList.replace('active-w', 'active-d');
            })

            target.innerHTML = target.innerHTML.replace(icons[0], icons[1]);
        }else {
            body.classList.remove('d-mod');
            index.classList.remove('d-mod');
            target.classList.replace('mod-bg-d-w', 'mod-bg-w-d');
            main.classList.replace('bd-d', 'bd-w');
            main.classList.replace('light-d-bg-main', 'light-w-bg-main');
            header.classList.replace('light-d-bg-header', 'light-w-bg-header');
            header.classList.replace('bd-d', 'bd-w');

            for(let i = 0; i < line.length; i++) {
                line[i].classList.replace('bd-d', 'bd-w');
            }

            aside.classList.replace('light-d-bg-aside', 'light-w-bg-aside');
            aside.classList.replace('bd-d', 'bd-w');
            exit.classList.replace('light-d-bg-exit', 'light-w-bg-exit');
            profile.classList.replace('gradient-d', 'gradient-w');
            picture.classList.replace('profile-bd-d', 'profile-bd-w');

            for(let i = 0; i < skill_icon.length; i++) {
                skill_icon[i].classList.remove('skill-d');
            }

            infor.classList.replace('light-d-bg-main', 'light-w-bg-main');
            back.classList.replace('d-mod', 'w-mod');
            back.classList.replace('back-d', 'back-w');
            box.classList.replace('d-inner-shadow', 'inner-shadow');
            back.classList.replace('d-shadow', 'shadow');
            back.classList.replace('bd-d', 'bd-w');
            box_btn.classList.replace('active-d', 'active-w');

            item.forEach(element => {
                element.classList.replace('project-d', 'project-w');
            });

            cover.forEach(element => {
                element.classList.replace('cover-d', 'cover-w');
            });

            footer.classList.replace('footer-d', 'footer-w');
            footer.classList.replace('bd-d', 'bd-w');

            labels.forEach(element => {
                element.classList.remove('label-d');
            });

            user_name.classList.remove('user-name-d');
            user_name.classList.replace('bd-d', 'bd-w');

            message.classList.remove('message-d');
            message.classList.replace('bd-d', 'bd-w');

            submit.classList.replace('bd-d', 'bd-w');
            submit.classList.replace('submit-d', 'submit-w');

            item_title.forEach(element => {
                element.classList.replace('active-d', 'active-w');
            })

            target.innerHTML = target.innerHTML.replace(icons[1], icons[0]);
        }

        this.setStorage(name, value);
    }

    setStorage(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    activeChange(nav, value) {
        const name = 'index';
        let _value;

        if(localStorage.getItem(name) === null) {
            _value = [];
        }else {
            _value = JSON.parse(localStorage.getItem(name));
        }

        nav.forEach((element, index, array) => {
            if(value[0]) {
                array[0].childNodes[_value].classList.replace('active-w','active-d');
                array[0].childNodes[_value].classList.replace('active-w-bd','active-d-bd');

                array[1].childNodes[_value].classList.replace('active-bg','active-bg-d');
                array[1].childNodes[_value].classList.remove('active-w');
            }else {
                array[0].childNodes[_value].classList.replace('active-d','active-w');
                array[0].childNodes[_value].classList.replace('active-d-bd','active-w-bd');

                array[1].childNodes[_value].classList.replace('active-bg-d','active-bg');
                array[1].childNodes[_value].classList.add('active-w');
            }
        });
    }
}