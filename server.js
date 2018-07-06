const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var router = require('./server/routes/router')

console.log(path.join(__dirname,'dist'))

var app = express();

app.use('/api', router)

//serve static files; point express to the "dist" folder that is constructed after ng build
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'dist')));

//mongoDB connection
var mongoDBurl = 'mongodb+srv://<userName>:<password>@firstappotc-lyrpz.mongodb.net/test?retryWrites=true';

mongoose.connect(mongoDBurl, options = {dbName: 'otc_tweet_master'}, function(err, res) {
    console.log(res)
});

mongoose.Promise = global.Promise;

var db = mongoose.connection

// var collection = connection.prototype.collection('tweets')

db.on('error', console.error.bind(console, 'mongodb connection error:'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var debug = require('debug')('server');

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));

console.log('Listening on port: ' + app.get('port'));

module.exports = app;
