import React from 'react';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage({ title, description, projects }) {
  return (
    <section className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
          <hr className="my-4 border-t-2 border-gray-300 mx-auto w-1/2" />
          <p className="text-lg text-gray-600 mt-4">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;

