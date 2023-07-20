const fs = require('fs');

const text = 'This is test - and it should be stored in a file!';

fs.writeFile('node-message.txt', text, (err, data) => {
    console.log('Wrote file!');
});