 var express = require('express');
 var app = express();
  app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
  })

  app.set('view engine', 'jade');
  app.set('views', process.argv[3]);
  app.listen(process.argv[2]);