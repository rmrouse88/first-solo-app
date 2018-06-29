// need to import a model definition which, by design, also carries the particular target collection

var Tweet = require('../models/tweet-model')

exports.tweet_list = function(req, res) {
    Tweet.findOne()
        .exec(function(err, tweet) { 
            console.log(tweet.user_name)
            res.send
    })
};

exports.findOne = function(req, res) { 
    Tweet.findOne()
}