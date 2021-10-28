import React from 'react';

const SkillSet = () => {
  return (
    <div id='SkillSet'>
      <h1 className='title'>Technical Skills</h1>
      <div className='skillBreakdown'>
        <p className='skillCategory'>Front-end:</p>
        <p className='skillStack'>
          JavaScript, C#, React, ES6, HTML, CSS, Sass, React Styled Components,
          Axios
        </p>
        <p className='skillCategory'>Back-end:</p>
        <p className='skillStack'>
          Node.js, Express, ASP.Net, MySQL, PostgreSQL, MongoDB, Mongoose,
          RESTful API
        </p>
        <p className='skillCategory'>Testing/Tools:</p>
        <p className='skillStack'>
          AWS, Mocha/Chai, Jest, Enzyme, Git, CircleCI, Webpack, Babel
        </p>
      </div>
    </div>
  );
};

export default SkillSet;
