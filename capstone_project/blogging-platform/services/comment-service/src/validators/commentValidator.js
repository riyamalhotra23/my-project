const Joi = require('joi');

const commentValidator = Joi.object({
    postId: Joi.string().required().messages({
        'string.base': 'Post ID must be a string',
        'string.empty': 'Post ID cannot be empty',
        'any.required': 'Post ID is required'
    }),
    content: Joi.string().min(1).max(500).required().messages({
        'string.base': 'Content must be a string',
        'string.empty': 'Content cannot be empty',
        'string.min': 'Content must be at least 1 character long',
        'string.max': 'Content must be at most 500 characters long',
        'any.required': 'Content is required'
    }),
    author: Joi.string().required().messages({
        'string.base': 'Author must be a string',
        'string.empty': 'Author cannot be empty',
        'any.required': 'Author is required'
    })
});

module.exports = commentValidator;