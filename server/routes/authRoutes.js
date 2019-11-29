const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  // these app.get are middlewares than intercept requests before they reach the server

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    },
  );

  app.get('/api/current_user', (req, res) => {
    console.log('the user', req.user);
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    // res.send(req.user);
    res.redirect('/');
  });
};
