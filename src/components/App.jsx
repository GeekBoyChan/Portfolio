/* eslint-disable jsx-quotes */
import React from 'react';
import AppHeader from './AppHeader.jsx';
import Introduction from './Introduction.jsx';
import SkillSet from './SkillSet.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import '../ChandlerWebsite.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='AppContainer'>
        <AppHeader />
        <div id='AppBody'>
          <Introduction />
          <SkillSet />
          <AboutMe />
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
