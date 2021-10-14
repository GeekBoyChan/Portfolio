import React from 'react';

const ProjectCard = ({ project }) => {
  if (project === undefined) {
    return (
      <div id='EmptyProjectCard'>
        <p>Please Select a Project</p>
      </div>
    );
  } else {
    const { title, description, tech, points, gitLink, projectLink } = project;
    return (
      <div id='ProjectCard'>
        <h4 className='projectTitle'>{title}</h4>
        <p className='projectTech'>{tech}</p>
        <a className='projectGit' href={gitLink}>
          Visit GitHub Repository
        </a>
        <p className='projectDescription'>{description}</p>
        <ul className='projectPoints'>
          {points.map((point, i) => (
            <li className='point' key={i}>
              {point}
            </li>
          ))}
        </ul>

        {projectLink && (
          <a className='projectLink' href={projectLink}>
            Visit Project Website
          </a>
        )}
      </div>
    );
  }
};

export default ProjectCard;
