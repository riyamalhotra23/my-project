const express = require('express');
const UserController = require('../controllers/userController');
const { validateUserRegistration, validateUserLogin } = require('../validators/userValidator');
const authMiddleware = require('../middleware/auth');

const router = express.Router();
const userController = new UserController();

router.post('/register', validateUserRegistration, userController.register);
router.post('/login', validateUserLogin, userController.login);
router.get('/me', authMiddleware, userController.getUser);

module.exports = router;