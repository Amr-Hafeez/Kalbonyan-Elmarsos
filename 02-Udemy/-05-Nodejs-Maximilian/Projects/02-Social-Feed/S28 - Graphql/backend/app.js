const path = require('path');
const {resolve} = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const {graphqlHTTP} = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const auth = require('./middleware/is-auth');
const {clearImage} = require("./util/clear-file");
const fs = require('fs');

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4())
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(resolve(__dirname, '../frontend/build')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(auth);

app.put('/post-image', (req, res) => {
    if (!req.isAuth) {
        throw new Error('Not authenticated!');
    }
    if (!req.file) {
        return res.status(200).json({message: 'No file provided!'});
    }
    if (req.body.oldPath) {
        console.log('fk u');
        clearImage(req.body.oldPath);
    }
    return  res.status(201).json({
        message: 'File stored',
        filePath: req.file.path
    })
})


app.use('/graphql',
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolver,
        graphiql: true,
        customFormatErrorFn(err) {
            if (!err.originalError) {
                return err;
            }
            const data = err.originalError.data;
            const message = err.message || 'An error occurred';
            const code = err.originalError || 500;
            return {message, status: code, data}
        }
    })
);

app.get('*', (req, res) => {
    fs.readFile('../frontend/build/index.html', 'utf8', (err, data) => {
        res.send(data);
    })
})

app.use((error, req, res, next) => {
    // console.log(error);
    const statusCode = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(statusCode).json({ message: message, data: data });
});

mongoose
    .connect(
        'mongodb+srv://amrhafeez02:sccJjeyIafoaaw4u@cluster0.pkyavwc.mongodb.net/graphql?retryWrites=true'
    )
    .then(() => {
        app.listen(8080);
    })
    .catch(err => console.log(err));
