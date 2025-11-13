import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/v1/posts');
                setPosts(response.data);
            } catch (err) {
                setError('Error fetching posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;