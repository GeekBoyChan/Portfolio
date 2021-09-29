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
    this.state = { appear: true };
  }

  render() {
    const { appear } = this.state;
    return (
      <div id='AppContainer'>
        <AppHeader />
        <CSSTransition
          in={appear}
          appear={true}
          timeout={300}
          classNames='fade'
        >
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
