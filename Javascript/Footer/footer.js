'use strict';

import Email from "./email.js";

export default class Footer {
    constructor(creator, container) {
        const footer = new creator('footer', 'footer', 'class', 'footer-w bd-w', '', 1, container, false, '', '');    
    
        const email = new Email(creator, footer.name);
    }
}