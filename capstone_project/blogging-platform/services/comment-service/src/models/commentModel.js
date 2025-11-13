const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },
    content: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;