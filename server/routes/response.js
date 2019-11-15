const router = require('express').Router();
const AuthHelper = require('../helpers/auth-helpers');
const ResponsesCtrl = require('../controllers/response');

// @route /api/responses/new
// @desc Add new post response
// @access private
router.post('/new', AuthHelper.authMiddleware, ResponsesCtrl.newResponse);

// @route /api/responses/edit
// @desc Edit post response
// @access private
router.put('/edit', AuthHelper.authMiddleware, ResponsesCtrl.editResponse);

// @route /api/responses/delete
// @desc Delete post response
// @access private
router.delete('/delete', AuthHelper.authMiddleware, ResponsesCtrl.deleteResponse);

module.exports = router;