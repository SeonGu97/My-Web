'use strict';

import Creator from "./Javascript/Create/creator.js";
import Main from "./Javascript/Main/main.js";
import Mod from "./Javascript/Mod/mod.js";

export default class Index {
    constructor(creator) {
        const index = new creator('index', 'div', 'id', 'index', '', 1, document.body, false, '', '');
        
        const main = new Main(creator, index.name);

        const mod = new Mod(creator, index.name);
    }
}

const creator = Creator;

const index = new Index(creator);