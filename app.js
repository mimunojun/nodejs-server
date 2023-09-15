const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000); // port 3000

app.get('/', (req, res) => {    // first arg: what link it listen to, second arg: what to do
    // res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about'); // automatically sets status code (404)
});

// 404
app.use((req, res) => {     // it fires every single request
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});