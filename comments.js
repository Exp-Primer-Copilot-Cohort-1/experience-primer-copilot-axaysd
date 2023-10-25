// Create web server
// -----------------

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

// Create comment
// @route POST /comments
// @desc Create comment
// @access Private
router.post('/', auth, commentController.createComment);

// Get all comments
// @route GET /comments
// @desc Get all comments
// @access Public
router.get('/', commentController.getAllComments);

// Get comment by id
// @route GET /comments/:id
// @desc Get comment by id
// @access Public
router.get('/:id', commentController.getCommentById);

// Update comment by id
// @route PUT /comments/:id
// @desc Update comment by id
// @access Private
router.put('/:id', auth, commentController.updateCommentById);

// Delete comment by id
// @route DELETE /comments/:id
// @desc Delete comment by id
// @access Private
router.delete('/:id', auth, commentController.deleteCommentById);

module.exports = router;