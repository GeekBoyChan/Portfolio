import React from 'react';
import ProjectTile from './ProjectTile.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectInfo from '../ProjectInfo.js';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projectInfo: ProjectInfo,
      slectedCardIndex: undefined,
    };
  }

  render() {
    let { projectInfo } = this.state;
    return (
      <div id='Projects'>
        <p className='title'>Projects</p>
        {ProjectInfo.map((project, i) => (
          <ProjectTile key={i} project={project} />
        ))}
      </div>
    );
  }
}

export default Projects;
