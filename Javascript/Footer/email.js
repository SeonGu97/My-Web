'use strict';

export default class Email {
    constructor(creator, container) {
        const email = new creator('email', 'div', 'class', 'email', '', 1, container, false, '', '');    
        
        const contact_form = new creator('contact_form', 'form', 'class', 'contact-form', '', 1, email.name, false, '', '');
        
        const contact_number = new creator('contact_number', 'input', ['type', 'name'], ['hidden', 'contact_number'], '', 1, contact_form.name, false, '', '');
        const label_1 = new creator('label_1', 'label', '', '', 'Name', 1, contact_form.name, false, '', '');
        
        const user_name = new creator('user_name', 'input', ['type', 'name'], ['text', 'user_name'], '', 1, contact_form.name, false, '', '');
        const label_2 = new creator('label_2', 'label', '', '', 'Email', 1, contact_form.name, false, '', '');
        
        const user_email = new creator('user_email', 'input', ['type', 'name'], ['email', 'user_email'], '', 1, contact_form.name, false, '', '');
        const label_3 = new creator('label_3', 'label', '', '', 'Message', 1, contact_form.name, false, '', '');
        
        const message = new creator('message', 'textarea', 'name', 'message', '', 1, contact_form.name, false, '', '');
        const submit = new creator('submit', 'submit', ['type', 'value'], ['submit', 'Send'], 'send', 1, contact_form.name, false, '', '');
    }
    

    window() {
        window.onload = function() {
            document.getElementsByClassName('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }
    }
}