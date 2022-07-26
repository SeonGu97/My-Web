'use strict';

export default class Aside {
    constructor(Create, container) {
        this.aside = new Create('aside', 'aside', ['class'], ['bd-l'], '', 1, container, false, '', '');
    }
}