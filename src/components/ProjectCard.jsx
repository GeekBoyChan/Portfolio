import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, tech, points, gitLink, projectLink } = project;
  console.log(title, description, tech, points, gitLink, projectLink);
  return (
    <div className='projectCard'>
      <p className='projectTitle'>{title}</p>
      <p className='projectTech'>{tech}</p>
      <p className='projectGit'>{gitLink}</p>
      <p className='projectDescription'>{description}</p>
      <div className='projectPoints'>
        {points.map((point, i) => (
          <p className='point' key={i}>
            {points}
          </p>
        ))}
      </div>

      {projectLink && <p className='projectLink'>{projectLink}</p>}
    </div>
  );
};

export default ProjectCard;
