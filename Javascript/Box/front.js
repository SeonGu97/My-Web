'use strict';

import Profile from "./profile.js";
import Infor from "./infor.js";

export default class Front {
    constructor(creator, box) {
        const front = new creator('front', 'div', 'class', 'front bd-w', '', 1, box, true, 'transitionend', e => {
            const front = document.querySelector('.front');
            const mod = document.querySelector('.mod');

        });
    
        const profile = new Profile(creator, front.name);
        const infor = new Infor(creator, front.name);
    }
}