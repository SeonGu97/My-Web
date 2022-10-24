'use strict';

export default class Tree {
    constructor(creator, back) {
        const tree = new creator('tree', 'div', 'class', 'tree ', '', 1, back, false, '', '');
    
        const stick = new creator('stick', 'li', 'class', 'stick ', '', 4, tree.name, false, '', '');
    
        const sticks = document.querySelectorAll('.stick');

        const array1 = ['2016.02', '2016.03 ~ 2018.02', '2018.08 ~ 2020.04', '2020.08~'];
        const array2 = ['<i class="fa-solid fa-school"></i>', '<i class="fa-solid fa-graduation-cap"></i>', '<i class="fa-solid fa-person-military-rifle"></i>', '<i class="fa-solid fa-code"></i>']
        const array3 = ['고등학교 졸업 - 문과', '항공학교 졸업 - 학점은행제 점수 미달. 학위 미취득', '군입대 - 육군병장 만기전역', '프론트엔드 개발 공부중..'];

        sticks.forEach((element, index) => {        
            const dot = new creator('dot', 'span', 'class', 'dot ', '<i class="bi bi-dot"></i>', 1, element, false, '', '');
        
            const day = new creator('day', 'div', 'class', 'day ', array1[index], 1, element, false, '', '');

            const icon = new creator('stick-icon', 'span', 'class', 'stick-icon stick-w', array2[index], 1, element, false, '', '');

            const text = new creator('stick-text', 'span', 'class', 'stick-text', array3[index], 1, element, false, '', '');
        });

        const vertical = new creator('vertical', 'div', 'class', 'vertical', '', 1, tree.name, false, '', '');
    }
}