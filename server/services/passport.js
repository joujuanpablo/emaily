const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //grab this schema from "mongoose" (one argument).
// Note that the User object is our model class (mongoose) which translates to a "collection" instance
// in MongoDB

passport.serializeUser((user, done) => {
  done(null, user.id); //id for the mongo record (user model ID) and the app as a whole, not the google id. This is because they could be signing in with linkedIn or instagram etc. This id unifies
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    //findById takes the serialized id and turns it into mongoose id? No at this point it has been deserialized into the mongoose ID and now it's retrieving the record
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // callbackURL: '/auth/google/callback',  if you use a relative path, the browser will turn it into an http protocol. Could use env variable or pass the proxy true/
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    },
  ),
);
