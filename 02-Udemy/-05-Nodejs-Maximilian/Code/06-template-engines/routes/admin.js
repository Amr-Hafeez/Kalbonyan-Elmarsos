const express = require('express');

const path = require("path");

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product',
    (
        req,
        res,
        next,
    ) => {
        // console.log('In another middleware!');

        // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

        res.render('add-product', {
            docTitle: 'Add Product',
            path: '/admin/add-product',
            activeAddProduct: true,
            formsCSS: true,
        })
    });

router.post('/add-product',
    (
        req,
        res,
        next) => {
        // console.log(req.body);
        products.push({title: req.body.title});
        res.redirect('/');
    });

exports.routes = router;
exports.products = products;