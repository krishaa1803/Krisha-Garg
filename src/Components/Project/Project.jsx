import React from 'react';
import './Project.css';
import {
  SiThreedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiFlask,
} from "react-icons/si";

const Project = () => {
  const projects = [
    {
      title: '3D Interior Website',
      description: 'Built an interactive 3D platform allowing users with minimum technical skills to design homes by customizing furniture and walls offering a range of 20+ options.',
      githubLink: 'https://github.com/krishaa1803/3D-Interior-Designing',
      image: '/3D Interior.png', 
      technologies: [<SiThreedotjs />, <SiHtml5 />, <SiCss3 />, <SiJavascript />],
    },
    {
      title: 'MediDoctor',
      description: 'Developed a platform to book doctor appointments and order medicines.',
      githubLink: 'https://github.com/krishaa1803/MediDoctor',
      image: '/MediDoctor.png', 
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiNodedotjs />, <SiMongodb />],
    },
    {
      title: 'Nyaya Bot',
      description: 'An accessible portal for citizens to navigate legal information, such as judge appointments, fines, eFiling procedures, and Fast Track Courts, in a single, consolidated location.',
      githubLink: 'https://github.com/krishaa1803/Nyaya-Bot',
      image: '/Nyaya Bot.png', 
      technologies: [<SiHtml5 />, <SiCss3 />, <SiFlask />],
    },
  ];

  return (
    <div id='project' className="project">
      <div className="project-title">
        <h1>Projects</h1>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technology-icons">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-icon">{tech}</span>
                ))}
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
