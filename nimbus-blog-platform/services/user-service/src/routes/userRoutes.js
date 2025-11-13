const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const userController = new UserController();

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;