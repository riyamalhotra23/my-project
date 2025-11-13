const express = require('express');
const CommentController = require('../controllers/commentController');
const { validateComment } = require('../validators/commentValidator');

const router = express.Router();
const commentController = new CommentController();

// Route to add a comment
router.post('/:postId', validateComment, commentController.addComment);

// Route to get comments for a post
router.get('/:postId', commentController.getComments);

module.exports = router;