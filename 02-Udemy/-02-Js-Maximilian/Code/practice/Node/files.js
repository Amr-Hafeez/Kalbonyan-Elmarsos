// console.log('Hello, From node!');

const fs = require('fs');

fs.readFile('user-data', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
})

fs.writeFile('user-data', 'username=Amr', err => {
    if (err) {
        console.log(err);
    } else console.log("It's Done");
});