'use strict';

export default class Effect {
    constructor(creator, menu) {
        const effect = new creator('effect', 'div', 'class', 'effect', '', 1, menu, false, '', '');    
    }
}