const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs'); // app settings
// app.set('views', 'myviews'); // if the name of html folder is not "views", you have to tell the name of that

// listen for requests
app.listen(3000); // port 3000

// middleware & static files
app.use(express.static('public')); // inside the folder called public will be available; they could be accessed without stating like "/public/styles.css", but just "/styles.css"
app.use(morgan('dev'));

app.get('/', (req, res) => {    // first arg: what link it listen to, second arg: what to do
    // res.send('<p>home page</p>');
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
});

// 404
app.use((req, res) => {     // it fires every single request
    res.status(404).render('404', { title: '404' }); // automatically sets status code (404)
});