'use strict';

import Motto from "./motto.js";
import Line from "../line.js";
import Skill from "./skill.js";
import Box from "../Box/box.js";
import Project from "../Project/project.js";

export default class Container {
    constructor(creator, main) {
        const container = new creator('container', 'div', 'class', 'container', '', 1, main, false, '', '');    
    
        const motto = new Motto(creator, container.name);
        const line1 = new Line(creator, container.name);
        const box = new Box(creator, container.name);
        const line2 = new Line(creator, container.name);
        const skill = new Skill(creator, container.name);
        const line3 = new Line(creator, container.name);
        const project = new Project(creator, container.name);
    }
}