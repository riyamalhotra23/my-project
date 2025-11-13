import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentThread = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`/api/v1/comments/${postId}`);
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [postId]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!newComment) return;

        try {
            const response = await axios.post(`/api/v1/comments`, { postId, text: newComment });
            setComments([...comments, response.data]);
            setNewComment('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    if (loading) {
        return <div>Loading comments...</div>;
    }

    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id}>{comment.text}</li>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CommentThread;