'use strict';

export default class Motto {
    constructor(creator, container) {
        const motto = new creator('motto', 'div', 'class', 'motto', '', 1, container, false, '', '');
        
    const sentence = new creator('sentence', 'span', 'class', 'sentence', '빨리 가는 유일한 방법은 제대로 가는 것이다.', 1, motto.name, false, '', '');
        const saying = new creator('saying', 'span', 'class', 'saying', '- 로버트 C.마틴 -', 1, motto.name, false, '', ''); 
    }
}