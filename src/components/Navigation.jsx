import React from 'react';

const Navigation = ({ navScrollHandler }) => {
  return (
    <div className='navigation'>
      <p className='navItem' onClick={() => navScrollHandler('Introduction')}>
        Home
      </p>
      <p className='navItem' onClick={() => navScrollHandler('SkillSet')}>
        Technical Skills
      </p>
      <p className='navItem' onClick={() => navScrollHandler('AboutMe')}>
        About Me
      </p>
      <p className='navItem' onClick={() => navScrollHandler('Projects')}>
        Projects
      </p>
    </div>
  );
};

export default Navigation;
