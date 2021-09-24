/* eslint-disable jsx-quotes */
import React from 'react';
import AppHeader from './AppHeader.jsx';
import Introduction from './Introduction.jsx';
import SkillSet from './SkillSet.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='App'>
        <AppHeader />
        <Introduction />
        <SkillSet />
        <AboutMe />
        <Projects />
      </div>
    );
  }
}

export default App;
