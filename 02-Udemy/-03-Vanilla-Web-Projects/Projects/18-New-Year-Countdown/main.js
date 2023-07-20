const loading = document.getElementById('loading');
const countDown = document.getElementById('time-container');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const sec = document.getElementById('sec');
const year = document.getElementById('year');

const currentYear = new Date().getFullYear();
year.innerText = `${currentYear + 1}`;


const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 24 / 60 / 60 / 1000);
    const h = Math.floor(diff / 60 / 60 / 1000) % 24;
    const m = Math.floor(diff / 24 / 60 / 1000) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerText = `${d}`;
    hours.innerText = h < 10 ? `0${h}` : `${h}`;
    mins.innerText = m < 10 ? `0${m}` : `${m}`;
    sec.innerText = s < 10 ? `0${s}` : `${s}`;
}

setTimeout(() => {
    loading.style.display = 'none';
    countDown.style.display = 'flex';
}, 1000);

setInterval(updateCountdown, 1000);
