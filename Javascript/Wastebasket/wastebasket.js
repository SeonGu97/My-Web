'use strict';

import U_side from "./u_side.js";
import F_side from "./f_side.js";

export default class Wastebasket {
    constructor(creator, container) {
        const wastebasket = new creator('wastebasket', 'section', 'class', 'wastebasket', '', 1, container, false, '', '');

        const u_side = new U_side(creator, wastebasket.name);
        const f_side = new F_side(creator, wastebasket.name);
    }
}