var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
var JSDOM = require('jsdom').JSDOM;
var morgan = require('morgan');
var express = require('express');
var request = require('request');
var process = require('process');
var Readability = require('readability');
var sassMiddleware = require('node-sass-middleware');

var app = express();

app.enable('trust proxy');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap: true
}));
app.use('/vendors/zepto', express.static(__dirname + '/node_modules/zepto/dist'));
app.use('/vendors/roboto-slab', express.static(__dirname + '/node_modules/roboto-slab-fontface-kit/fonts'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', { title: 'Readable Browser' });
});

app.get('/article', function(req, res, next) {
  var url = req.query.url;
  if (url) {
    request(url, function (err, src, data) {
      if (err) {
        next(err);
      }
      var dom = new JSDOM(data, { url: url });
      var article = new Readability(dom.window.document).parse();
      if (article) {
        article.url = url;
        res.render('article', article);
      } else {
        next();
      }
    });
  } else {
    res.render('index');
  }
});

app.get('/bookmarklet', function(req, res) {
  res.render('bookmarklet', { title: 'Bookmarklet' });
});

app.get('/settings', function(req, res) {
  res.render('settings', { title: 'Settings' });
});

var port = process.env.PORT || 8080;
app.listen(port, function(err) {
  console.log("  _____                _       _     _");
  console.log(" |  __ \\              | |     | |   | |");
  console.log(" | |__) |___  __ _  __| | __ _| |__ | | ___");
  console.log(" |  _  // _ \\/ _` |/ _` |/ _` | '_ \\| |/ _ \\");
  console.log(" | | \\ \\  __/ (_| | (_| | (_| | |_) | |  __/");
  console.log(" |_|  \\_\\___|\\__,_|\\__,_|\\__,_|_.__/|_|\\___|");
  console.log("");
  console.log("          Listening on 'http://0.0.0.0:" + port + "'");
  console.log("");
});
