const router   = require('express').Router();
const UserCtrl = require('../controllers/user');

router.post('/register', UserCtrl.registerUser);


module.exports = router; 