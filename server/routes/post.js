const router     = require('express').Router();
const PostsCtrl  = require('../controllers/post');
const Authhelper = require('../helpers/auth-helpers');


// @route /api/posts/new
// @desc Add new post
// @access private
router.post('/new', Authhelper.authMiddleware, PostsCtrl.newPost);

// @route /api/posts/index
// @desc Fetch multiple posts
// @access private
router.get('/index', (req,res)=>{

});

// @route /api/posts/fetch
// @desc Fetch signle post
// @access private
router.get('/fetch', Authhelper.authMiddleware, PostsCtrl.fetchPost);

// @route /api/posts/edit
// @desc Edit post
// @access private
router.put('/edit', (req,res)=>{

});


// @route /api/posts/delete
// @desc Delete post
// @access private
router.delete('/delete', (req,res)=>{

});

module.exports = router;