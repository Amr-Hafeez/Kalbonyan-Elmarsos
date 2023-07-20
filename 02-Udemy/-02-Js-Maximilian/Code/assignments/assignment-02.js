const task3Element = document.getElementById('task-3');

function greet() {
  alert('Hi there!');
}

function greetUser(userName) {
  alert('Hi ' + userName);
}

function combine(str1, str2, str3) {
  return `${str1} ${str2} ${str3}`;
}

greetUser('Amr');

task3Element.addEventListener('click', greet);

const combinedString = combine('Hi', 'there', '!');
alert(combinedString);