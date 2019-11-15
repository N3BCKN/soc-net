const router = require('express').Router();
const LikeCtrl  = require('../controllers/like');
const Authhelper = require('../helpers/auth-helpers');

// @route /api/likes/add
// @desc Add Like
// @access private
router.post('/add', Authhelper.authMiddleware, LikeCtrl.addLike);

// @route /api/likes/delete
// @desc Remove Like
// @access private
router.delete('/delete', Authhelper.authMiddleware, LikeCtrl.deleteLike);

module.exports = router;