import React from 'react';

const ProjectTile = ({ project }) => {
  const { title, description, picture } = project;
  return (
    <div className='projectTile'>
      <p className='tileTitle'>{title}</p>
      <p className='tilePicture'>picture</p>
      <p className='tileDescription'>{description}</p>
    </div>
  );
};

export default ProjectTile;
