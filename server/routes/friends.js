const router = require('express').Router();
const FriendsCtrl  = require('../controllers/friends');
const Authhelper = require('../helpers/auth-helpers');

// @route /api/friends/new
// @desc New Friendship between two users
// @access private
router.post('/new', Authhelper.authMiddleware, FriendsCtrl.newFriendship);

// @route /api/friends/accept
// @desc Acept Friendship
// @access private
router.put('/acept', Authhelper.authMiddleware, FriendsCtrl.aceptFriendship);

// @route /api/friends/delete
// @desc Remove Friendship
// @access private
router.delete('/delete', Authhelper.authMiddleware, FriendsCtrl.deleteFriendship);

module.exports = router;