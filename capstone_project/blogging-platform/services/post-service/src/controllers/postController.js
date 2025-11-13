exports.PostController = class PostController {
    constructor(PostModel) {
        this.PostModel = PostModel;
    }

    async createPost(req, res) {
        try {
            const post = new this.PostModel(req.body);
            await post.save();
            res.status(201).json(post);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getPosts(req, res) {
        try {
            const posts = await this.PostModel.find().populate('author', 'username');
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deletePost(req, res) {
        try {
            const { id } = req.params;
            const post = await this.PostModel.findByIdAndDelete(id);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};