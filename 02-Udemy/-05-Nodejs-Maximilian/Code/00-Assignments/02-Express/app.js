const express = require('express');

const app = express();

app.use('/users',
    (req, res, next) => {
        res.send('<h1>Welcome in the users page</h1>');
    });

app.use('/',
    (req, res, next) => {
        res.send('<h2> Home Page</h2>');
    })

app.listen(3000);