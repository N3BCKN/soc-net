const router = require('express').Router();
const BioCtrl  = require('../controllers/bio');
const Authhelper = require('../helpers/auth-helpers');


// @route /api/bio/update
// @desc Add new post
// @access private
router.put('/update', Authhelper.authMiddleware, BioCtrl.updateBio);


module.exports = router;