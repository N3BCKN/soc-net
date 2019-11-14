const router   = require('express').Router();
const UserCtrl = require('../controllers/user');

router.get('/register', UserCtrl.registerUser);


module.exports = router; 