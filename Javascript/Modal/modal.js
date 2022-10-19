'use strict';

import modal_Container from "./modal_container.js";
import Modal_exit_btn from "./modal_exit_btn.js";

export default class Modal {
    constructor(creator, index) {
        const modal = new creator('modal', 'div', 'class', 'modal modal-h modal-w bd-w', '', 1, index, false, '', '');    
        
        const modal_exit_btn = new Modal_exit_btn(creator, modal.name);
        const modal_container = new modal_Container(creator, modal.name);
    }
}