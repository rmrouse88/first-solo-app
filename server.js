const express = require('express');
const mongoose = require('mongoose');

var router = require('./server/routes/router')

var app = express();

app.get('/', (req,res) => res.send('hello world'));

app.listen(3000, () => console.log('example app listening on port 3000!'));

app.use('/tweets', router)

var mongoDBurl = 'mongodb+srv://rmrouse88:5Tgb5rdx!@firstappotc-lyrpz.mongodb.net/test?retryWrites=true';

mongoose.connect(mongoDBurl, options = {dbName: 'otc_tweet_master'}, function(err, res) {
    console.log(res)
});

mongoose.Promise = global.Promise;

var db = mongoose.connection

// var collection = connection.prototype.collection('tweets')

db.on('error', console.error.bind(console, 'mongodb connection error:'));
