import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/slices/projectSlice';

const ProjectForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        techStack: '',
        description: '',
        githubLink: '',
        liveLink: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        try {
            dispatch(addProject(formData));

            setFormData({
                title: '',
                techStack: '',
                description: '',
                githubLink: '',
                liveLink: '',
            });
        } catch (err) {
            setError('Something went wrong.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">
            <h3 className="text-xl font-semibold mb-4">Add New Project</h3>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <input
                type="text"
                name="title"
                placeholder="Project Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full mb-3 p-2 border rounded"
            />

            <input
                type="text"
                name="techStack"
                placeholder="Tech Stack (e.g., React, Node.js)"
                value={formData.techStack}
                onChange={handleChange}
                required
                className="w-full mb-3 p-2 border rounded"
            />

            <textarea
                name="description"
                placeholder="Project Description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full mb-3 p-2 border rounded"
            />

            <input
                type="url"
                name="githubLink"
                placeholder="GitHub Link"
                value={formData.githubLink}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
            />

            <input
                type="url"
                name="liveLink"
                placeholder="Live Demo Link"
                value={formData.liveLink}
                onChange={handleChange}
                className="w-full mb-4 p-2 border rounded"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add Project
            </button>
        </form>
    );
};

export default ProjectForm; 