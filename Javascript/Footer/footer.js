'use strict';

import Email from "./email.js";
import Title from "../Container/title.js";

export default class Footer {
    constructor(creator, container) {
        const footer = new creator('footer', 'footer', 'class', 'location-5 footer-w bd-w', '', 1, container, false, '', '');    
        
        const title = new Title(creator, footer.name, `<i class="bi bi-dot"></i> About`);
        const email = new Email(creator, footer.name);  
    }
}