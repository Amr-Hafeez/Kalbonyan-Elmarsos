// This is my solution for this project

const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showSuccess(input) {
    const parentEl = input.parentElement;
    parentEl.className = 'form-control success';
}

function showError(input, msg) {
    const parentEl = input.parentElement;
    parentEl.className = 'form-control error';
    const small = parentEl.querySelector('small');
    small.textContent = msg;
}

function checkEmail(input) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(input.value.trim())) {
        showSuccess(input);
    } else showError(input, 'Email is not valid');
}

function checkRequired(fields) {
    fields.forEach((field) => {
        if (field.value.trim().length) {
            showSuccess(field);
        } else {
            showError(field, `${getFieldName(field)} is required`);
            // console.log(field);
        }
    })
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be at less than ${max} characters`
        );
    } else showSuccess(input);
}

function checkPasswordsMatch(field1, field2) {
    if (field1.value !== field2.value) {
        showError(field2, `Password do not match`)
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([userName, email, password, password2]);
    checkLength(userName, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});