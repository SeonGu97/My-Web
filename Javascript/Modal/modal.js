'use strict';

import Modal_exit_btn from "./modal_exit_btn.js";
import Modal_project from "./modal_project.js";

export default class Modal {
    constructor(creator, index) {
        const modal = new creator('modal', 'div', 'class', 'modal modal-h modal-w bd-w', '', 1, index, false, '', '');    
    
        const modal_exit_btn = new Modal_exit_btn(creator, modal.name);
        const modal_project = new Modal_project(creator, modal.name);
    }
}