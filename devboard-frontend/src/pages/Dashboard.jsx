import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectForm from '../components/ProjectForm';
import ProjectCard from '../components/ProjectCard';

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);
    const { projects } = useSelector((state) => state.project);
    const navigate = useNavigate();

    if (!user) {
        navigate('/');
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">
                    Welcome, {user.name}! 👋
                </h2>

                <ProjectForm />

                <hr className="my-6" />

                <div className="grid gap-4">
                    {projects.length === 0 && <p>No projects added yet.</p>}
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 