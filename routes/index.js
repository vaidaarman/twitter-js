const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use('/static', express.static('public'))

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/:file', function(req, res, next) {
    var css = req.params.file;
    res.sendFile(css, {root: './public/stylesheets/'}, function (err) {
        if (err) throw err;  
    })
})

router.get( '/users/:name', function(req, res, next) {
    
    var name = req.params.name;
    var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets } );
});

router.get( '/users/:id', function(req, res) {
    var id = +req.params.id;
    var tweets = tweetBank.find( {id: id} );
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;
