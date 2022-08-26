'use strict';

export default class Skill {
    constructor(creator, container) {
        const skill = new creator('skill', 'section', 'class', 'skill', '', 1, container, false, '', '');
        
        const num = 4;
        const icons = ['<i class="fa-brands fa-html5"></i>', '<i class="fa-brands fa-css3-alt"></i>', '<i class="fa-brands fa-square-js"></i>', '<i class="fa-solid fa-image"></i>'];
        const icons_name = ['HTML', 'CSS', 'Javascript', 'Photoshop'];

        for(let i = 0; i < num; i++) {
            const skill_icon = new creator('skill_icon', 'div', 'class', 'skill-icon', icons[i], 1, skill.name, false, '', '');
        
            const skill_name = new creator('skill_name', 'div', 'class', 'skill-name', icons_name[i], 1, skill_icon.name, false, '', '');
        }
    }
}