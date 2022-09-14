'use strict';

export default class Email {
    constructor(creator, container) {
        const email = new creator('email', 'div', 'class', 'email', '', 1, container, false, '', '');    
        
        const contact_form = new creator('contact_form', 'form', 'id', 'contact-form', '', 1, email.name, false, '', '');
        const contact_number = new creator('contact_number', 'input', ['type', 'name'], ['hidden', 'contact_number'], '', 1, contact_form.name, false, '', '');
        const label_1 = new creator('label_1', 'label', '', '', '보내는 이', 1, contact_form.name, false, '', '');
        const user_name = new creator('user_name', 'input', ['type', 'name', 'class', 'autocomplete'], ['text', 'user_name', 'user-name bd-w', 'off'], '', 1, contact_form.name, false, '', '');
        const label_3 = new creator('label_3', 'label', '', '', '메세지', 1, contact_form.name, false, '', '');
        const message = new creator('message', 'textarea', ['name', 'class'], ['message', 'message bd-w'], '', 1, contact_form.name, false, '', '');
        const submit = new creator('submit', 'input', ['type', 'value', 'class'], ['submit', '보내기', 'submit bd-w submit-w'], '', 1, contact_form.name, false, '', '');
    }
}