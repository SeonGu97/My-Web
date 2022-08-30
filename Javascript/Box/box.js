'use strict';

import Profile from "./profile.js";
import Infor from "./infor.js";
import Intro from "./intro.js";
import Box_btn from "./box-btn.js";

export default class Box {
    constructor(creator, container) {
        const box = new creator('box', 'div', 'class', 'box', '', 1, container, false, '', '');
    
        const profile = new Profile(creator, box.name);
        const infor = new Infor(creator, box.name);
        const intro = new Intro(creator, box.name);
        const box_btn  = new Box_btn(creator, box.name);
    }
}