const Joi = require('joi');

const userValidator = {
    register: Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    }),
    login: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    }),
    update: Joi.object({
        username: Joi.string().min(3).max(30),
        email: Joi.string().email(),
        password: Joi.string().min(6),
    }).min(1), // At least one field must be provided for update
};

module.exports = userValidator;