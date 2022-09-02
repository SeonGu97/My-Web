'use strict';

export default class Shadow_box {
    constructor(creator, box) {
        const shadow_box = new creator('shadow_box', 'div', 'class', 'shadow-box', '', 1, box, false, '', '');
    }
}