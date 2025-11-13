const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Post Service: MongoDB connected');
    } catch (error) {
        console.error('Post Service: MongoDB connection failed', error);
        process.exit(1);
    }
};

module.exports = connectDB;