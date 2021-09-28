import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, tech, points, gitLink, projectLink } = project;

  return (
    <div className='projectCard'>
      <p className='projectTitle'>{title}</p>
      <p className='projectTech'>{tech}</p>
      <a className='projectGit' href={gitLink}>
        Visit GitHub Repository
      </a>
      <p className='projectDescription'>{description}</p>
      <div className='projectPoints'>
        {points.map((point, i) => (
          <p className='point' key={i}>
            {point}
          </p>
        ))}
      </div>

      {projectLink && (
        <a className='projectLink' href={projectLink}>
          Visit Project Website
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
