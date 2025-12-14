module.exports = function isSignedIn(req, res, next) {
  if (!req.session.user) {
    console.log('User not signed in');
    return res.redirect('/auth/sign-in');
  }
  next();
};
