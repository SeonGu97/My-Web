'use strict';

export default class Leaf {
    constructor(creator, back) {
        const leaf = new creator('leaf', 'div', 'class', 'leaf', '', 1, back, false, '', '');
    
        const leaf_item = new creator('leaf_item', 'p', 'class', 'leaf-item', '', 4, leaf.name, false, '', '');
        
        const array1 = ['안녕하세요. 프론트엔드 개발자가 되고싶은 강선구입니다.', 
        '혼자 독학으로 개발공부를 하다보니 성장도 느리고 부족한점도 너무 많지만, 그럼에도 포기하지 않고 공부를 하고있습니다.', 
        '제가 제일 좋아하는 언어는 JS입니다. <br>가장 기본이 되는 언어이고 많은 단점이 있는 언어임에도 불구하고 좋아하는 이유는 가장 근본이 되는 언어라고 생각하기 때문입니다.',  
        '이러한 기본기를 바탕으로 도움이 될 수있는 회사를 찾고있습니다.'];

        leaf.name.childNodes.forEach((element, index) => {
            element.innerHTML = array1[index];
        });
    }
}