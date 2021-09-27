import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import ProjectInfo from '../ProjectInfo.js';

const Projects = () => {
  console.log(ProjectInfo);
  return (
    <div id='Projects'>
      <p className='title'>Projects</p>
      {ProjectInfo.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
};

export default Projects;
