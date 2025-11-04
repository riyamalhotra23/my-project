const express = require('express');
const CommentController = require('../controllers/commentController');

const router = express.Router();
const commentController = new CommentController();

const setCommentRoutes = (app) => {
    router.post('/', commentController.createComment);
    router.get('/:id', commentController.getComment);
    router.put('/:id', commentController.updateComment);
    router.delete('/:id', commentController.deleteComment);

    app.use('/api/comments', router);
};

module.exports = setCommentRoutes;