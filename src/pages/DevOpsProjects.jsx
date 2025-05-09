import React from 'react';
import ProjectsPage from './ProjectsPage';
import { devOpsProjects } from '../data/devOpsProjects';

// const devOpsProjects = [
//   {
//     title: 'CI/CD Pipeline',
//     description: 'Built an automated CI/CD pipeline with GitHub Actions and Docker.',
//     imageUrl: 'https://via.placeholder.com/400x250',
//     demoUrl: 'https://demo.devops.com',
//     codeUrl: 'https://github.com/user/devops-project',
//     techStack: ['Docker', 'GitHub Actions', 'Terraform'],
//   },
//   {
//     title: 'CI/CD Pipeline',
//     description: 'Built an automated CI/CD pipeline with GitHub Actions and Docker.',
//     imageUrl: 'https://via.placeholder.com/400x250',
//     demoUrl: 'https://demo.devops.com',
//     codeUrl: 'https://github.com/user/devops-project',
//     techStack: ['Docker', 'GitHub Actions', 'Terraform'],
//   },
//   {
//     title: 'CI/CD Pipeline',
//     description: 'Built an automated CI/CD pipeline with GitHub Actions and Docker.',
//     imageUrl: 'https://via.placeholder.com/400x250',
//     demoUrl: 'https://demo.devops.com',
//     codeUrl: 'https://github.com/user/devops-project',
//     techStack: ['Docker', 'GitHub Actions', 'Terraform'],
//   },
//   {
//     title: 'CI/CD Pipeline',
//     description: 'Built an automated CI/CD pipeline with GitHub Actions and Docker.',
//     imageUrl: 'https://via.placeholder.com/400x250',
//     demoUrl: 'https://demo.devops.com',
//     codeUrl: 'https://github.com/user/devops-project',
//     techStack: ['Docker', 'GitHub Actions', 'Terraform'],
//   }
// ];

function DevOpsProjects() {
  return (
    <ProjectsPage
      title="DevOps Projects"
      description="Explore my DevOps-focused work."
      projects={devOpsProjects}
    />
  );
}

export default DevOpsProjects;

