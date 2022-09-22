'use strict';

import Motto from "./motto.js";
import Line from "../line.js";
import Skill from "./skill.js";
import Box from "../Box/box.js";
import Project from "../Project/project.js";
import Footer from "../Footer/footer.js";
import Title from "./title.js";

export default class Container {
    constructor(creator, main) {
        const container = new creator('container', 'div', 'class', 'container location-1', '', 1, main, false, '', '');    
    
        const motto = new Motto(creator, container.name);
        const line1 = new Line(creator, container.name);
        const box = new Box(creator, container.name);
        const line2 = new Line(creator, container.name);
        const skill = new Skill(creator, container.name);
        const line3 = new Line(creator, container.name);
        const title = new Title(creator, container.name, `<i class="bi bi-dot"></i> 프로젝트`);
        const project = new Project(creator, container.name);
        const footer = new Footer(creator, container.name);
    }
}