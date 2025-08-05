import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">DevBoard</h1>

            {user && (
                <div className="flex items-center gap-4">
                    <span className="text-gray-700">👤 {user.name}</span>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 