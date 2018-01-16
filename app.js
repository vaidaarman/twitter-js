const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const volleyball = require('volleyball');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

//adding GET handler, route
app.get('/', function(req, res, next) {
    res.send('Welcome to Twitter!');  
});

app.get('/news', function(req, res, next) {
    res.send('Pepper is snoring');  
});

app.get('/is-anybody-in-there', function(req, res, next) {
    res.send('Maybe... Why? Who\'s asking?');  
});

app.post('/modernism', function(req, res, next) {
    res.send('Maybe... Why? Who\'s asking?');  
});












app.listen(3000, (err) => {
    if (err) throw err;
    console.log(chalk.yellow('server listening'));
})