'use strict';

export default class F_side {
    constructor(creator, wastebasket) {
        const f_side = new creator('f_side', 'div', 'class', 'f-side f-side-w bd-w', '<i class="bi bi-trash-fill"></i>', 1, wastebasket, false, '', '');    
    }
}