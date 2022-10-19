'use strict';

import Modal_project from "./modal_project.js";

export default class modal_Container {
    constructor(creator, modal) {
        const modal_container = new creator('modal_container', 'div', 'class', 'modal-container', '', 1, modal, false, '', '');    
    
        const modal_project = new Modal_project(creator, modal_container.name);
    }
}