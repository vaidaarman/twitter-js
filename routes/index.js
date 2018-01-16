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

module.exports = router;
