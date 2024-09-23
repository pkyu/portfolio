import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../assets/sitewallpaper.png';
import arrowright from '../../assets/arrow-right.png';
import Jason_Baron_resume from '../../assets/Jason_Baron_resume.pdf';
import './Home.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-page-art-container'>
        <img src={home} alt={'Home Page Art'} className="home-page-art" />
        <div className='home-page-text-container'>
          <div className='home-left'>
            <h1>Jason's Portfolio</h1>
            <h2>
              <a href={Jason_Baron_resume} download="Jason_Baron_resume.pdf" className="resume-link">Resume</a>
              <span> / </span>
              <a href="https://www.linkedin.com/in/jason-xb" target="_blank" rel="noopener noreferrer" className="resume-link">LinkedIn</a>
              <span> / </span>
              <a href="mailto:jasonbaronx@gmail.com" className="resume-link">Email</a>
            </h2>
          </div>
          <div className='home-right'>
            <h2>
              <Link to="/about">
                About <img src={arrowright} alt="Arrow Right" className="arrow-icon" />
              </Link>
            </h2>
            <h2>
              <Link to="/projects">
                Projects <img src={arrowright} alt="Arrow Right" className="arrow-icon" />
              </Link>
            </h2>
            <h2>
              <Link to="/experience">
                Experience <img src={arrowright} alt="Arrow Right" className="arrow-icon" />
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
