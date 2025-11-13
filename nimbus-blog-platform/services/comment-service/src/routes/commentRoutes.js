const express = require('express');
const CommentController = require('../controllers/commentController');

const router = express.Router();
const commentController = new CommentController();

// Routes for comments
router.post('/', commentController.createComment.bind(commentController));
router.get('/:postId', commentController.getCommentsByPost.bind(commentController));
router.put('/:id', commentController.updateComment.bind(commentController));
router.delete('/:id', commentController.deleteComment.bind(commentController));

module.exports = router;