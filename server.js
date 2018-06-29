const express = require('express');
const mongoose = require('mongoose');
var path = require('path');

var router = require('./server/routes/router')

var app = express();


console.log(path.join(__dirname,'dist'))
app.use('/tweets', router)

app.use(express.static(path.join(__dirname, 'dist')));

var mongoDBurl = 'mongodb+srv://rmrouse88:5Tgb5rdx!@firstappotc-lyrpz.mongodb.net/test?retryWrites=true';

mongoose.connect(mongoDBurl, options = {dbName: 'otc_tweet_master'}, function(err, res) {
    // console.log(res)
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

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var debug = require('debug')('server');

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));

console.log('Listening on port: ' + app.get('port'));

module.exports = app;
