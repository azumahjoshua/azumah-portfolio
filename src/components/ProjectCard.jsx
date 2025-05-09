// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ title, description, codeUrl, techStack }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, i) => (
            <span key={i} className="text-sm bg-gray-200 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a href={codeUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
