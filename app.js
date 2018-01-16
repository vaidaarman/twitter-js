const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');


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

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

// nunjucks.configure('views');
// nunjucks.render('index.html', locals, function (err, output) {
//     if (err) throw err;
//     console.log(output);
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
app.get('/views', function(req, res, next) {
    res.render( 'index', {title: 'Hall of Fame', people: people} );
})









app.listen(3000, (err) => {
    if (err) throw err;
    console.log(chalk.yellow('server listening'));
})