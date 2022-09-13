'use strict';

import Email from "./email.js";

export default class Footer {
    constructor(creator, container) {
        const footer = new creator('footer', 'footer', '', '', '', 1, container, false, '', '');    
    
        const email = new Email(creator, footer.name);
    }
}