var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

/** ---------- MODULES ---------- **/
/** ---------- MIDDLEWARE ---------- **/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

/** ---------- EXPRESS ROUTES ---------- **/
/** ---------- MONGOOSE CONNECTION HANDLING ---------- **/
/** ---------- START SERVER ---------- **/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Server is running on port', app.get('port'));
});
