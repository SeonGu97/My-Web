'use strict';

import Picture from "./picture.js";

export default class Profile {
    constructor(creator, container) {
        const profile = new creator('profile', 'section', 'class', 'profile gradient-w', '', 1, container, false, '', '');
   
        const picture = new Picture(creator, profile.name);
    }
}