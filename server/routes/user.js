const router   = require('express').Router();
const UserCtrl = require('../controllers/user');

router.post('/register', UserCtrl.registerUser);

router.post('/login', UserCtrl.loginUser);


module.exports = router; 