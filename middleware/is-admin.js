module.exports = function adminOnly(req, res, next) {
  console.log('Session user:', req.session.user);
  if (!req.session.user || req.session.user.role !== 'admin') {
    console.log('Access denied — not admin');
    return res.status(403).send('Access denied — Admins only');
  }
  next();
};
