// for the naviagation bar in mobile device 
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const a=nav.classList;

if (bar) {
    bar.addEventListener('click', () => {
        a.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        a.remove('active');
    })
}


