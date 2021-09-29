import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProjectTile from './ProjectTile.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectInfo from '../data/ProjectInfo.js';

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
    let { projectInfo, selectedCardIndex, cardAppear } = this.state;
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
          <TransitionGroup>
            <CSSTransition
              appear={true}
              key={selectedCardIndex}
              timeout={450}
              classNames='fade'
            >
              <ProjectCard project={projectInfo[selectedCardIndex]} />
            </CSSTransition>
          </TransitionGroup>
        )}
      </div>
    );
  }
}

export default Projects;
