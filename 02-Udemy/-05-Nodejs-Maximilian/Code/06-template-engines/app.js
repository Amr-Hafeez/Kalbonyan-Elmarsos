const path = require("path");


const express = require('express');
const bodyParser = require('body-parser');

// We need the following line for export the express handlebars templating engine
// const expressHbs = require('express-handlebars');

const app = express();

// We need the next line to configure the express handlebars templating engine
//app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout'}));
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {docTitle: 'Page Not Found'});
})

app.listen(3000);

// const server = http.createServer(app);

// server.listen(3000);
