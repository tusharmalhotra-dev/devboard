import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{project.techStack}</p>
            <p className="mb-2">{project.description}</p>
            <div className="flex gap-4 text-blue-600 text-sm">
                {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                )}
                {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard; 