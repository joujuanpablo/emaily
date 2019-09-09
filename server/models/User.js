const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model('users', userSchema); //load this schema into "mongoose" (two arguments)
