'use strict';

import Motto from "./motto.js";
import Line from "../line.js";
import Profile from "./profile.js";

export default class Container {
    constructor(creator, main) {
        const container = new creator('container', 'div', 'class', 'container', '', 1, main, false, '', '');    
    
        const motto = new Motto(creator, container.name);
        const line = new Line(creator, container.name);
        const profile = new Profile(creator, container.name);
    }
}