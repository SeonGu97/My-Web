'use strict';

export default class Back {
    constructor(creator, box) {
        const back = new creator('back', 'div', 'class', 'back bd-w w-mod', '', 1, box, false, '', '');
    }
}