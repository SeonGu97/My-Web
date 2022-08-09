'use strict';

export default class Picture {
    constructor(Create, area_1) {
        this.picture = new Create('picture', 'img', ['class', 'src'], ['picture', '/Image/취업사진1.jpg'], '', 1, area_1, false, '', '');
    }
}