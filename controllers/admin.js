const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Books = require('../models/Books');
const isSignedIn = require('../middleware/is-signed-in');
const isAdmin = require('../middleware/is-admin');

router.get('/dashboard', isSignedIn, isAdmin, async (req, res) => {
  try {
    const users = await User.find()
    const totalBooks = await Books.countDocuments();

    res.render('admin/dashboard.ejs', {
      users,
      totalBooks
    });
  } catch (error) {
    console.error(error);
    res.redirect('/');
  }
});

module.exports = router;
