// need to import a model definition which, by design, also carries the particular target collection

var Tweet = require('../models/tweet-model')

exports.find_one = function(req, res, next) {
    Tweet.find()
        .limit(5)
        .exec(function(err, tweet) {
        if (err) {console.log(err)};
        res.json(tweet)
    })
};

// ,
// exports.findOne = function(req, res) { 
//     Tweet.findOne()
// }