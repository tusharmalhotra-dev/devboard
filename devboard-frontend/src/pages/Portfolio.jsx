import React from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
    const { projects } = useSelector((state) => state.project);

    return (
        <div className="min-h-screen bg-gray-50 p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Developer Portfolio</h1>

            {projects.length === 0 ? (
                <p className="text-center text-gray-500">No projects to show.</p>
            ) : (
                <div className="grid gap-4">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Portfolio; 