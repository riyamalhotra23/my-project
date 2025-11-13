const mongoose = require('mongoose');
const User = require('../../services/user-service/src/models/userModel');
const Post = require('../../services/post-service/src/models/postModel');
const Comment = require('../../services/comment-service/src/models/commentModel');

const seedUsers = async () => {
    const users = [
        { username: 'john_doe', email: 'john@example.com', password: 'password123' },
        { username: 'jane_doe', email: 'jane@example.com', password: 'password456' },
    ];
    await User.insertMany(users);
};

const seedPosts = async () => {
    const posts = [
        { title: 'First Post', content: 'This is the content of the first post.', author: 'john_doe' },
        { title: 'Second Post', content: 'This is the content of the second post.', author: 'jane_doe' },
    ];
    await Post.insertMany(posts);
};

const seedComments = async () => {
    const comments = [
        { postId: '1', content: 'Great post!', author: 'jane_doe' },
        { postId: '2', content: 'Thanks for sharing!', author: 'john_doe' },
    ];
    await Comment.insertMany(comments);
};

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await seedUsers();
        await seedPosts();
        await seedComments();
        console.log('Seeding completed successfully.');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedData();