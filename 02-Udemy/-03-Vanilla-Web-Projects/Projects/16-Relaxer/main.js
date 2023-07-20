const text = document.getElementById('text');

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In!';

    setTimeout(() => {
        text.innerText = 'Hold';
    }, 3000);

    setTimeout(() => {
        text.innerText = 'Breathe out';
    }, 4500);

}

setInterval(breathAnimation, 7500)