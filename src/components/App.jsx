/* eslint-disable jsx-quotes */
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AppHeader from './AppHeader.jsx';
import Introduction from './Introduction.jsx';
import SkillSet from './SkillSet.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import '../ChandlerWebsite.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.navScrollHandler = this.navScrollHandler.bind(this);
  }

  navScrollHandler(divId) {
    const divElement = document.getElementById(divId);
    const yOffSet = -15;
    const y =
      divElement.getBoundingClientRect().top + window.pageYOffset + yOffSet;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div id='AppContainer'>
        <AppHeader navScrollHandler={this.navScrollHandler} />
        <CSSTransition in={true} appear={true} timeout={300} classNames='fade'>
          <div id='AppBody'>
            <Introduction />
            <SkillSet />
            <AboutMe />
            <Projects />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
