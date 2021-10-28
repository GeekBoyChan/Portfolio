import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProjectTile from './ProjectTile.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectInfo from '../data/ProjectInfo.js';

class Projects extends React.Component {
  constructor(props) {
    super(props);
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
    let { navScrollHandler } = this.props;
    let { projectInfo, selectedCardIndex, cardAppear } = this.state;
    return (
      <div id='Projects'>
        <h1 className='title'>Projects</h1>
        <div className='projectTileContainer'>
          {ProjectInfo.map((project, i) => (
            <ProjectTile
              key={i}
              index={i}
              project={project}
              selectedCardIndex={selectedCardIndex}
              tileSelectHandler={this.tileSelectHandler}
              navScrollHandler={navScrollHandler}
            />
          ))}
        </div>

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
      </div>
    );
  }
}

export default Projects;
