const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //grab this schema from "mongoose" (one argument).
// Note that the User object is our model class (mongoose) which translates to a "collection" instance
// in MongoDB

passport.serializeUser((user, done) => {
  done(null, user.id); //id for the mongo record (user model ID) and the app as a whole, not the google id. This is because they could be signing in with linkedIn or instagram etc. This id unifies
  console.log('serialize is done');
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    //findById takes the serialized id and turns it into mongoose id? No at this point it has been deserialized into the mongoose ID and now it's retrieving the record
    done(null, user);
    console.log('deserialize is done', id, user);
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
    (accessToken, refreshToken, profile, done) => {
      console.log('google sends google ID', profile.id);
      new User({ googleId: profile.id }).save();

      User.findOne({ googleId: profile.id })
        .then(existingUser => {
          if (existingUser) {
            console.log('passport found that the user already exists');
            done(null, existingUser);
          } else {
            console.log(
              'passport did not find matching user, new user please!',
            );
            new User({ googleId: profile.id })
              .save()
              .then(user => done(null, user));
          }
        })
        .catch(error => console.log('ERROR', error));
    },
  ),
);
