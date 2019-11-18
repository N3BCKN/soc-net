const router = require('express').Router();
const BioCtrl  = require('../controllers/bio');
const Authhelper = require('../helpers/auth-helpers');


// @route /api/bio/update
// @desc Add new post
// @access private
router.put('/update', Authhelper.authMiddleware, BioCtrl.updateBio);

// @route /api/bio/update
// @desc Fetch user bio
// @access private
router.get('/fetch', Authhelper.authMiddleware, BioCtrl.fetchBio);


module.exports = router;