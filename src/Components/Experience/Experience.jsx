import React from 'react';
import { SlArrowRight, SlBadge } from 'react-icons/sl'; // Import icons
import './Experience.css';

const Experience = () => {
  return (
    <div id='experience' className="experience">
      {/* Title Section */}
      <div className="experience-title">
        <h1>Experience</h1>
      </div>

      {/* Galaxy Office Experience */}
      <div className="experience-item">
        <div className="experience-header">
          <h3>
            Galaxy Office Automation Pvt Ltd
            <span className="gradient-icon">
              <SlBadge />
            </span>
          </h3>
          <div className="action-link">
            <a href="https://drive.google.com/file/d/1ogSheZcs6mC4T7Zn1ZKG-G7Fzqu4mn35/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              View LOR <SlArrowRight />
            </a>
          </div>
        </div>
        <p className="role">Internship – Web Development & AI</p>
        <p className="duration">Mumbai, India – June 2024 – July 2024</p>
        <p className="description">
          Learned low-code platforms like Mendix to build feature-rich, scalable applications efficiently. <br />
          Acquired foundational knowledge in modern AI platforms like H2O.ai and IBM tools, understanding their capabilities for data-driven solutions.
        </p>
      </div>

      {/* Apna Ghar Aashram Experience */}
      <div className="experience-item">
        <div className="experience-header">
          <h3>
            Apna Ghar Aashram
            <span className="gradient-icon">
              <SlBadge />
            </span>
          </h3>
          <div className="action-link">
            <a
              href="https://drive.google.com/file/d/1iKMSWR0jczgb9ZkI5Nw_lUgbtOALteCG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video <SlArrowRight />
            </a>
          </div>
        </div>
        <p className="role">Volunteer</p>
        <p className="duration">Rajasthan, India – June 2023</p>
        <p className="description">
          Volunteered at Apna Ghar Aashram, a non-profit organization that supports mentally ill destitutes. <br />
          Facilitated the reunion of a man with his family after nearly 8 years, contributing to the organization's mission of rehabilitation and care.
        </p>
      </div>

      {/* Position of Responsibility */}
      <h2>Position of Responsibility</h2>
      <div className="responsibility-item">
        <ul>
          <li>
            <strong>Cohead at Technical Department, Cybersecurity Club</strong> – Oct 2024 – Present
          </li>
          <li>
            <strong>Associate Head at Corporate Relations Department, IEEE Committee</strong> – June 2024 – Present
          </li>
          <li>
            <strong>Associate Head at Creatives Department, IEEE Committee</strong> – June 2023 – May 2024
          </li>
          <li>
            <strong>Member, Rotaract Club of Mumbai Western Elite</strong> – July 2024 – Present
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
