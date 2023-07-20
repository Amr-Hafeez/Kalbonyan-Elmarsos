const button = document.querySelector('button');

// button.onclick = function() {
//
// }

const buttonClickHandler = event => {
    console.log(event);
}

// button.onclick = buttonClickHandler;

// button.addEventListener('click', buttonClickHandler)

// buttons.forEach(btn => {
//     btn.addEventListener('mousemove', buttonClickHandler);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
})

const div = document.querySelector('div');
div.addEventListener('click', event => {
    console.log('Div is clicked');
    console.log(event);
});
button.addEventListener('click', function (event) {

    event.stopPropagation();
    console.log('Button is clicked');
    console.log(event);
    console.log(this)
})

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     });
// });

list.addEventListener('click', function (event) {
    // console.log(event.currentTarget);
    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
    // form.submit();
    button.click();
    console.log(this);
});








