const scroll = window.addEventListener('scroll', e => {
    const header = document.querySelector('header');
    const header_h = header.clientHeight;

    const motto = document.querySelector('.motto');
    const motto_h = motto.clientHeight;

    const box = document.querySelector('.box');
    const box_h = motto_h + box.clientHeight;

    const skill = document.querySelector('.skill');
    const skill_h = box_h + skill.clientHeight;

    const project = document.querySelector('.project');
    const project_h = skill_h + project.clientHeight;

    const footer = document.querySelector('footer');
    const footer_h = project_h + footer.clientHeight;

    let num = 0;

    if(window.scrollY >= motto_h) {
        num++;
    }
    
    if(window.scrollY >= box_h) {
        num++;
    }

    if(window.scrollY >= skill_h) {
        num++;
    }

    if(window.scrollY == (document.body.scrollHeight - window.innerHeight)) {
        num++;
    }

    const name = 'index';
    let value;

    if(localStorage.getItem(name) === null) {
        value = [];
    }else {
        value = JSON.parse(localStorage.getItem(name));
    }

    value.push(num);
    value.splice(value.indexOf(value[0]), 1);

    const nav = document.querySelectorAll('nav');
    nav.forEach((element, index, array) => {
        const nav1 = array[0];
        const nav2 = array[1];

        const mod = document.querySelector('.mod');

        if(mod.classList.contains('mod-change')) {
            array[0].childNodes.forEach((element, index, array) => {
                element.classList.remove('active-d');
                element.classList.remove('active-d-bd');

                array[num].classList.add('active-d');
                array[num].classList.add('active-d-bd');
            })

            array[1].childNodes.forEach((element, index, array) => {
                element.classList.remove('active-d');
                element.classList.remove('active-bg-d');

                array[num].classList.add('active-d');
                array[num].classList.add('active-bg-d');
            })
        }else {
            array[0].childNodes.forEach((element, index, array) => {
                element.classList.remove('active-w');
                element.classList.remove('active-w-bd');

                array[num].classList.add('active-w');
                array[num].classList.add('active-w-bd');
            })

            array[1].childNodes.forEach((element, index, array) => {
                element.classList.remove('active-w');
                element.classList.remove('active-bg');

                array[num].classList.add('active-w');
                array[num].classList.add('active-bg');
            })
        };

        localStorage.setItem(name, JSON.stringify(value));
    });
}, false);

export default scroll;