const resize = window.addEventListener('resize', () => {
    const aside = document.querySelector('aside');
    const close = document.querySelector('.close');

    let timer;
    const delay = 300;

    const pc = matchMedia('screen and (min-width: 1000px)').matches;

    clearTimeout(timer);

    timer = setTimeout(() => {
        if(pc) {
            close.classList.remove('open');
            aside.classList.remove('show');
        }
    }, delay);
}, false);

export default resize;