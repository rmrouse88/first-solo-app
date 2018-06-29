var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TweetSchema = new Schema(
    {
    text: {type: String},
    user_name: {type: String },
    user_screen_name: {type: String},
    hashtags: {type: Array},
    user_origin: {type: Object},
    place: {type: Object},
    coords: {type: Object},
    timestamp: {type: String},
    retweet: {type: Boolean},
    quoted: {type: Boolean},
    following_count: {type: Number},
    followers_count: {type: Number}
}
);

// export module
module.exports = mongoose.model('Tweet', TweetSchema);
