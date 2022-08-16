'use strict';

import Creator from "./Javascript/Create/creator.js";
import Main from "./Javascript/Main/main.js";
import Aside from "./Javascript/Aside/aside.js";
import Mod from "./Javascript/Mod/mod.js";
import Exit from "./Javascript/Aside/exit.js";
import Resize from "./Javascript/resize.js";

export default class Index {
    constructor(creator) {
        const index = new creator('index', 'div', 'id', 'index', '', 1, document.body, false, '', '');
        
        const main = new Main(creator, index.name);

        const aside = new Aside(creator, index.name);

        const exit = new Exit(creator, index.name);

        const mod = new Mod(creator, index.name);

        const resize = Resize;
    }
}

const creator = Creator;

const index = new Index(creator);