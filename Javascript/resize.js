let timer;
const delay = 200;

const resize = window.addEventListener('resize', e => {

    const pc_size = 1000;
    const pc = matchMedia(`screen and (max-width: ${pc_size}px)`).matches;

    const aside = document.querySelector('aside');
    const exit = document.querySelector('.exit');

    clearTimeout(timer);

    timer = setTimeout(() => {
        if(!pc) {
            aside.classList.remove('hide-on-bush');
            exit.classList.remove('show-exit');
        }
    }, delay);
});

export default resize;