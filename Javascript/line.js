'use strict';

export default class Line {
    constructor(creator, main) {
        const line = new creator('line', 'hr', 'class', 'line bd-w', '', 1, main, false, '', '');    
    }
}