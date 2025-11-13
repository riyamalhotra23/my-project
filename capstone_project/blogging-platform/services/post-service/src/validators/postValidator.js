const Joi = require('joi');

const postSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(100)
        .required(),
    content: Joi.string()
        .min(10)
        .required(),
    author: Joi.string()
        .required(),
});

const validatePost = (post) => {
    return postSchema.validate(post);
};

module.exports = {
    validatePost,
};