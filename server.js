
var bGround = require('fcc-express-bground');
var myApp = require('./myApp');
var express = require('express');
var app = express();
require('dotenv').config();



if (!process.env.DISABLE_XORIGIN) {
  app.use(function(req, res, next) {
    var allowedOrigins = ['https://narrow-plane.gomix.me', 'https://www.freecodecamp.com'];
    var origin = req.headers.origin || '*';
    if (!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1) {
      console.log(origin);
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
  }); 
}
var obj = { "message": "Hello json" }
const mySecret = process.env.MESSAGE_STYLE
console.log(mySecret)

app.get('/json', function(req, res) {
  res.json(mySecret === 'uppercase' ? { "message": "HELLO JSON" } : { "message": "Hello json" })
})
var absolutePath = __dirname + '/views/index.html';
app.get('/', function(req, res) {
  res.sendFile(absolutePath)
})
mpath = __dirname + '/public';
app.use('/public', express.static(mpath))
var port = process.env.PORT || 3000;
bGround.setupBackgroundApp(app, myApp, __dirname).listen(port, function() {
  bGround.log('Node is listening on port ' + port + '...')
});