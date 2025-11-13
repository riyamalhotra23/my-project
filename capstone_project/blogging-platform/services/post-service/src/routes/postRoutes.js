const express = require('express');
const PostController = require('../controllers/postController');
const postValidator = require('../validators/postValidator');

const router = express.Router();
const postController = new PostController();

// Route to create a new post
router.post('/', postValidator.createPost, postController.createPost);

// Route to get all posts
router.get('/', postController.getPosts);

// Route to get a single post by ID
router.get('/:id', postController.getPostById);

// Route to update a post by ID
router.put('/:id', postValidator.updatePost, postController.updatePost);

// Route to delete a post by ID
router.delete('/:id', postController.deletePost);

module.exports = router;