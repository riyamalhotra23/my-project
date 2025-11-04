import React, { useEffect, useState } from 'react';
import api from '../services/api';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await api.get(`/comments?postId=${postId}`);
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [postId]);

    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id}>
                        <strong>{comment.author}</strong>: {comment.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;