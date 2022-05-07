const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/auth');
const { body, validationResult } = require('express-validator');
require('dotenv').config({ path: './config.env' });

const JWT_SECRET = process.env.KEY;
// route 1 - For Sign Up Of User
router.post(
  '/signup',
  [
    body('name').exists(),
    body('email').exists(),
    body('password').exists(),
    body('name').isLength({ min: 3 }),
    body('password').isLength({ min: 8 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);
      success = true;
      res.send({ success, user, token });
    } catch (e) {
      res.json({ mess: 'Unable To Connect To The Server', e });
    }
  }
);

router.post(
  '/login',
  [body('email').exists(), body('password').exists()],
  async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.json('Invalid Credentials');
      }
      const compare = await bcrypt.compare(password, user.password);
      if (!compare) {
        return res.json('Invalid Credentials');
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, token });
    } catch (e) {
      res.json({ mess: 'Unable To Connect To The Server', e });
    }
  }
);

router.get('/getuser', fetchUser, async (req, res) => {
  try {
    let userID = req.user.id;
    const user = await User.findById(userID).select('-password');
    res.json({ user });
  } catch (e) {
    res.json({ mess: 'Unable To Connect To The Server', e });
  }
});

module.exports = router;
