import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/api';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await getUserProfile();
                setUser(response.data);
            } catch (err) {
                setError('Failed to load user profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{user.username}'s Profile</h1>
            <p>Email: {user.email}</p>
            {/* Additional user information can be displayed here */}
        </div>
    );
};

export default Profile;