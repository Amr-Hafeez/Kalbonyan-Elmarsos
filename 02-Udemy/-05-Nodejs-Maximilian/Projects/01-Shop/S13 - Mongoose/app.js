const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/User');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById('646e061562a3ffe84b84463c')
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// 82Le5gNvxBWjDrIf
mongoose
    .connect(
        'mongodb+srv://amrkhalid:LUZZC9XVnA6UhGgk@cluster0.ptrdhnp.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(result => {
        User.findOne().then(user => {
            if (!user) {
                const user = new User({
                    name: 'Amr',
                    email: 'amr@test.com',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        })
        console.log('Connected');
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });
