const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send('Hello World!')
});
app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});
const wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);