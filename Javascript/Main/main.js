'use strict';

import Header from "../Header/header.js";
import Line from "../line.js";

export default class Main {
    constructor(creator, index) {
        const main = new creator('main', 'main', 'class', 'bd-w light-w-bg-main', '', 1, index, false, '', '');    
    
        const header = new Header(creator, main.name);
        const line = new Line(creator, main.name);
    }
}