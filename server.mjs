import express from 'express';

const app = express();

import mongoose, { mongo } from 'mongoose';
var databaseurl = 'mongodb+srv://rmrouse88:<PASSWORD>@firstappotc-lyrpz.mongodb.net/test?retryWrites=true';
mongoose.connect(databaseurl);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// app.get('/', (req,res) => res.send('Hello World!'));

// app.listen(3000, () => console.log('Example app listening on port 3000!'));
