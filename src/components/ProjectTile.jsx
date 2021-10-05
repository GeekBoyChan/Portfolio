import React from 'react';

const ProjectTile = ({ project, index, tileSelectHandler }) => {
  const { title, description, picture } = project;
  console.log(picture);
  return (
    <div className='projectTile' onClick={() => tileSelectHandler(index)}>
      <p className='tileTitle'>{title}</p>
      <img className='tilePicture' src={picture} />
      <p className='tileDescription'>{description}</p>
    </div>
  );
};

export default ProjectTile;
