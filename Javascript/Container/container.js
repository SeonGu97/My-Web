'use strict';

import Motto from "./motto.js";
import Line from "../line.js";

export default class Container {
    constructor(creator, main) {
        const container = new creator('container', 'div', 'class', 'container', '', 1, main, false, '', '');    
    
        const motto = new Motto(creator, container.name);
        const line = new Line(creator, container.name);
    }
}