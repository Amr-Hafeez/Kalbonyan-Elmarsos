const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const modalEl = document.querySelector('.modal');

const aside = document.querySelector('aside');
const main = document.querySelector('main');

toggle.addEventListener('click', () => {
    aside.classList.toggle('show');
    main.classList.toggle('mini');
});

close.addEventListener('click', () => modal.classList.remove('show-modal'));

open.addEventListener('click', () => modal.classList.add('show-modal'));

window.addEventListener('click', e =>
    e.target === modal ? modal.classList.remove('show-modal') : false
);
