'use strict';

export default class Container {
    constructor(Create, index) {
        this.container = new Create('container', 'section', ['class'], ['container'], '', 1, index, false, '', '');
    }
}