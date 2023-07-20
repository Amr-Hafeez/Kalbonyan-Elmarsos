const form = document.getElementById('user-input');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userNameInput = document.getElementById('username');
    const password = document.getElementById('password');

    const userName = userNameInput.value;
    const userPassword = password.value;

    if (!userName.trim()) {
        alert('Invalid input - username must not be empty');
        return;
    }

    if (userPassword.trim().length <= 5) {
        alert('Invalid input - password must be six characters or longer.');
        return;
    }

    const user = {
        name: userName,
        password: userPassword,
    }

    console.log(`Hi, I am ${user.name}`);
})