'use strict';

import Email from "./email.js";
import Title from "../Container/title.js";

export default class Footer {
    constructor(creator, container) {
        const footer = new creator('footer', 'footer', 'class', 'footer-w bd-w', '', 1, container, false, '', '');    
        
        const title = new Title(creator, footer.name, `<i class="bi bi-dot"></i> 문의`);
        const email = new Email(creator, footer.name);  
    }
}