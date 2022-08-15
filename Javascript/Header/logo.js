'use strict';

export default class Logo {
    constructor(creator, header) {
        const logo = new creator('logo', 'div', 'class', 'logo', 'My Web', 1, header, false, '', '');    
    }
}