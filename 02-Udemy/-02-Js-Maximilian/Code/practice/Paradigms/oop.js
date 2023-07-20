class Validator {
    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';

    static validate(value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length > 0;
        }
        if (flag === this.MIN_LENGTH) {
            return value.trim().length > validatorValue;
        }
    }
}

class User {
    constructor(name, pass) {
        this.userName = name;
        this.password = pass;
    }

    greet() {
        console.log(`Hi, I am ${this.userName}`);
    }
}

class UserInputForm {
    constructor() {
        this.form = document.getElementById('user-input');
        this.userNameInput = document.getElementById('username');
        this.password = document.getElementById('password');

        this.form.addEventListener('submit', this.signupHandler.bind(this));
    }

    signupHandler(e) {
        e.preventDefault();
        const userName = this.userNameInput.value;
        const password = this.password.value;

        if (
            !Validator.validate(userName, 'REQUIRED') ||
            !Validator.validate(password, Validator.MIN_LENGTH, 5)
        ) {
            alert(
                'Invalid input - username or password is wrong (password should be at least six characters.'
            );
            return;
        }

        const user = new User(userName, password)

        user.greet();
    }
}

new UserInputForm();