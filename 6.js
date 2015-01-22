var express = require('express');
var bodyparser = require('body-parser');
var crypto = require('crypto');
var app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.put('/message/:id', function(req, res){
	res.end(crypto
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex'));
});
//app.post('/form', function(req, res){
//	res.end(req.body.str.split('').reverse().join(''));
//})
app.listen(process.argv[2]);