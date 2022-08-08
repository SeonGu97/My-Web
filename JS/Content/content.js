'use strict';

export default class Content {
    constructor(Create, main) {
        this.content = new Create('content', 'div', ['class'], ['content'], '', 1, main, false, '', '');
    }
}