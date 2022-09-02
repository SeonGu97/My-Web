'use strict';

export default class Picture {
    constructor(creator, profile) {
        const picture = new creator('picture', 'img', ['class', 'src', 'alt'], ['picture profile-bd-w', 'Img/취업사진1.jpg', '취업사진1.jpg'], '', 1, profile, false, '', '');
    }
}