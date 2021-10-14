import React from 'react';

const ProjectTile = ({
  project,
  index,
  tileSelectHandler,
  navScrollHandler,
  selectedCardIndex,
}) => {
  const { title, description, picture } = project;
  return (
    <div
      className='projectTile'
      onClick={() => {
        tileSelectHandler(index);
        if (selectedCardIndex === undefined) {
          navScrollHandler('EmptyProjectCard');
        }
        navScrollHandler('ProjectCard');
      }}
    >
      <p className='tileTitle'>{title}</p>
      <img className='tilePicture' src={picture} />
      <p className='tileDescription'>{description}</p>
    </div>
  );
};

export default ProjectTile;
