const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

const rootRoute = express.Router();

rootRoute.get('/',
    (
        req,
        res,
        next,) => {
        // console.log('In another middleware!'
        // );

        // res.send('<h1>Hello From Express</h1>');
        console.log(adminData.products);
        res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    });

module.exports = rootRoute;