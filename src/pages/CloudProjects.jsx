import React from 'react'
import ProjectsPage from './ProjectsPage'
import { cloudProjects } from '../data/cloudprojects'
function CloudProjects() {
    return (
        <ProjectsPage
         title="Cloud Projects"
         description="Explore my Cloud-focused work."
         projects={cloudProjects}
        />
    )
}

export default CloudProjects
