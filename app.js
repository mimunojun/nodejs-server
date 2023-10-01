const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

const dbURI = "mongodb+srv://mimuratsukuba:test0000@nodetuts.vdsblss.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then((result) => console.log('connected to db'))
    .then(() => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs'); // app settings
// app.set('views', 'myviews'); // if the name of html folder is not "views", you have to tell the name of that

// middleware & static files
app.use(express.static('public')); // inside the folder called public will be available; they could be accessed without stating like "/public/styles.css", but just "/styles.css"
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); // logger middleware

// routes
app.get('/', (req, res) => {    // first arg: what link it listen to, second arg: what to do
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes)

// 404
app.use((req, res) => {     // it fires every single request
    res.status(404).render('404', { title: '404' }); // automatically sets status code (404)
});