import React, { useState } from 'react';
import axios from '../api/axiosInstance';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('/api/auth/signup', formData);

            const { token, user } = response.data;

            // Save to Redux
            dispatch(loginSuccess({ user, token }));

            // Redirect to dashboard
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.error || 'Signup failed');
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>

                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                    className="w-full mb-3 p-2 border rounded"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                    className="w-full mb-3 p-2 border rounded"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                    className="w-full mb-4 p-2 border rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default Signup; 