const express = require('express');
const PostController = require('../controllers/postController');
const { authenticateJWT } = require('../../middlewares/authMiddleware');

const router = express.Router();
const postController = new PostController();

// Public routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);

// Protected routes
router.use(authenticateJWT);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;