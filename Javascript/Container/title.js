'use strict';

export default class Title {
    constructor(creator, element, text) {
        const title = new creator('title', 'h1', 'class', 'title', text, 1, element, false, '', '');
    }
};