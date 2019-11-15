const router   = require('express').Router();
const UserCtrl = require('../controllers/user');

// @route /api/users/register
// @desc Register new user
// @access public
router.post('/register', UserCtrl.registerUser);

// @route /api/users/login
// @desc Sign in new user
// @access public
router.post('/login', UserCtrl.loginUser);


module.exports = router; 