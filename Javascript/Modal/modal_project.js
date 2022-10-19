'use strict';

export default class Modal_project {
    constructor(creator, modal) {
        const modal_project = new creator('modal_project', 'a', 'class', 'modal-project bd-w', '', 8, modal, false, '', '');
    
        const _modal_project = document.querySelectorAll('.modal-project');

        const icon = ['<i class="fa-brands fa-vuejs"></i>', '<i class="fa-brands fa-square-js"></i>', '<i class="fa-brands fa-square-js"></i>', '<i class="fa-brands fa-square-js"></i>', '<i class="fa-brands fa-html5"></i>', '<i class="fa-brands fa-css3-alt"></i>', '<i class="fa-brands fa-square-js"></i>', '<i class="fa-brands fa-html5"></i>'];
        const title = ['Vue3 포트폴리오', '투두리트스1', '이미지 슬라이더1', '이미지 슬라이더2', '드롭다운', '반응형 헤더', '메뉴바', '레이아웃'];
        const color = ['#00c853', '#ffd600', '#ffd600', '#ffd600', '#dd2c00', '#0091ea', '#ffd600', '#dd2c00'];
        const href = [
            'https://seongu97.github.io/', 
            'https://seongu97.github.io/study/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B81/',
            'https://sungu1206.github.io/practice/Code/Img%20Slider/Img%20Sleder(x-axis)/',
            'https://sungu1206.github.io/practice/Code/Img%20Slider/Img%20Sleder/',
            'https://sungu1206.github.io/practice/Code/Nav/Drop%20Down/',
            'https://sungu1206.github.io/practice/Code/Nav/Nav%20Bar(Responsive)/',
            'https://sungu1206.github.io/practice/Code/Nav/TransformMenuBar/',
            'https://sungu1206.github.io/practice/Code/Test/Test2/',
        ];

        _modal_project.forEach((element, index) => {
            const modal_mark = new creator('modal_mark', 'span', 'class', 'modal-mark', icon[index], 1, element, false, '', '');
            const modal_title = new creator('modal_title', 'h1', 'class', 'modal-title', title[index], 1, element, false, '', '');
        
            element.firstChild.style.color = color[index];

            element.setAttribute('href', href[index]);
        });
    }
}