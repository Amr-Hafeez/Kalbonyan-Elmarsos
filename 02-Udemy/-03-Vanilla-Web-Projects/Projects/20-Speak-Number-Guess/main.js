const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

console.log('Number: ', randomNum);

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

function onSpeak(e) {
    // console.log(e);
    const msg = e.results[0][0].transcript;
    
    writeMessage(msg);
    checkNum(msg);
}

function writeMessage(msg) {
    msgEl.innerHTML = `
        <div> You said: </div>
        <span class="box">${msg}</span>
    `;
}

function checkNum(num) {
    const number = +num;
    
    if (Number.isNaN(number)) {
        msgEl.innerHTML += '<div> That is not a valid number </div>';
        return;
    }
    
    if (number > 100 || number < 1) {
        msgEl.innerHTML += '<div>Number must be between 1 and 100 </div>';
        return;
    }
    
    if (number === randomNum) {
        document.body.innerHTML = `
        <h2> Congrats! You have guessed the number <br /><br/>
        it was ${number} </h2>
        <button class="play-again" id="play-again">Play Again</button>
        `;
    } else if (number > randomNum) {
        msgEl.innerHTML += '<div> GO LOWER </div>';
    } else {
        msgEl.innerHTML += '<div>GO HIGHER</div>';
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', e => {
    if (e.target.id === 'play-again') {
        window.location.reload();
    }
})
