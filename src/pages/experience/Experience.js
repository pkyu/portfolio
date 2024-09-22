import React from 'react';
import './Experience.scss';
import { Chip } from 'primereact/chip';
import { Divider } from 'primereact/divider';
import udxlogo from '../../assets/udxlogo.jpg';
import experience from '../../assets/experience.png';

const Experience = () => {
  return (
    <div className="experience">
      <div className='experience-title-art-container'>
        <img src={experience} alt={'Experience Title Art'} className="experience-title-art" />
      </div>
      <div className="experience-tiles">
        <div className="experience-tile">
          <img src={udxlogo} alt="Universal Destinations and Experiences logo" className="experience-image" />
          <div className="experience-info">
            <h2 className="experience-role">Web Solutions Operations & Engineering Intern</h2>
            <h2 className="experience-company">Universal Destinations and Experiences</h2>
            <h3 className="experience-time">Jan 2024 - Apr 2024</h3>
            <div className="chips-container">
              <Chip label="Angular" className="language-chip" />
              <Chip label="Scss" className="language-chip" />
              <Chip label="Stencil.js" className="language-chip" />
              <Chip label="Storybook" className="language-chip" />
            </div>
            <div className="experience-details">
              <Divider />
              <h1>Component Design/Development</h1>
              <ul>
                <li>
                  Used Stencil.js, Typescript, and Storybook to build/update/maintain a modular web component library used across most current and upcoming Universal customer-facing platforms.
                </li>
                <li>
                  Worked closely with UI/UX designers before and during the creation process to understand and refine component designs to match product needs.
                </li>
                <li>
                  Built and styled components to be responsive and functional on all standard viewports and browsers.
                </li>
                <li>
                  Ensured components were accessible and navigable for people with disabilities using Narrator/Aria-labels and custom tabbing logic.
                </li>
                <li>
                  Frequently communicated with QA team to ensure that new and current components met all necessary criteria and functioned correctly in their applicable use cases.
                </li>
              </ul>
              <Divider />
              <h1>Component Implementation/Content Consumption</h1>
              <ul>
                <li>
                  Worked with content management team to establish data pipelines so that component content could be updated via Tridion CMS.
                </li>
                <li>
                  Implemented new components onto live and upcoming Angular websites, tailored them for specific product needs and ensured functionality.
                </li>
                <li>
                  Wrote unit tests for component functionality/content consumption in Jest/Jasmine frameworks. 
                </li>
                <li>
                  Diagnosed and performed bugfixes on currently implemented components and how they received/consumed data.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
