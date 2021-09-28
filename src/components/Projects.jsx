import React from 'react';
import ProjectTile from './ProjectTile.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectInfo from '../ProjectInfo.js';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projectInfo: ProjectInfo,
      selectedCardIndex: undefined,
    };
    this.tileSelectHandler = this.tileSelectHandler.bind(this);
  }

  tileSelectHandler(index) {
    this.setState({ selectedCardIndex: index });
  }

  render() {
    let { projectInfo, selectedCardIndex } = this.state;
    // console.log(projectInfo);
    return (
      <div id='Projects'>
        <p className='title'>Projects</p>
        {ProjectInfo.map((project, i) => (
          <ProjectTile
            key={i}
            index={i}
            project={project}
            tileSelectHandler={this.tileSelectHandler}
          />
        ))}
        {(selectedCardIndex || selectedCardIndex === 0) && (
          <ProjectCard project={projectInfo[selectedCardIndex]} />
        )}
      </div>
    );
  }
}

export default Projects;
