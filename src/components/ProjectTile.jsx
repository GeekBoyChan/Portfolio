import React from 'react';

const ProjectTile = ({ project, index, tileSelectHandler }) => {
  const { title, description, picture } = project;
  return (
    <div className='projectTile' onClick={() => tileSelectHandler(index)}>
      <p className='tileTitle'>{title}</p>
      <p className='tilePicture'>picture</p>
      <p className='tileDescription'>{description}</p>
    </div>
  );
};

export default ProjectTile;
