import React from 'react';
import meirl from '../../assets/meirl.png';
import about from '../../assets/about.png';
import themepark from '../../assets/themepark.png';
import tpt2 from '../../assets/tpt2.png';
import writing from '../../assets/writing.jpg';
import travel from '../../assets/travel.png';
import tiktok from '../../assets/tiktok.png';
import { Divider } from 'primereact/divider';
import { Tooltip } from 'primereact/tooltip';


import './About.scss';

const About = () => {
  return (
    <div className='about-page-container'>
      <div className='about-title-art-container'>
          <img src={about} alt={'About Title Art'} className="about-title-art" />
      </div>
        <div className='about-intro-container'>
          <img 
            src={meirl}
            alt="Avatar"
            className='avatar'
          />
          <p className='paragraph'>
            Hi, I'm Jason!<br />
            I'm a recent graduate from the University of Florida with a B.S. in Computer Science.<br />
            I started programming in middle school to learn how to make Minecraft mods,<br />
            and still hold that same passion today as I continue learning how to bring ideas to life.<br />
          </p>
        </div>
        <Divider/>
        <div className='about-detail-container'>
          <h2>My hobbies and interests include...</h2>
          <div className='about-hobbies-container'>
            <div className='about-hobby'>
                <Tooltip target=".avatar" />
                <img 
                src={travel}
                alt="Avatar"
                className='avatar'
                data-pr-tooltip="Photo taken at Osaka Castle during my study abroad in Japan"
                data-pr-position="top"
              />
              <p>Travelling</p>
            </div>
            <div className='about-hobby'>
                <img 
                src={themepark}
                alt="Avatar"
                className='avatar'
                data-pr-tooltip="Photo I took at Fuji-Q Highland, a theme park at the base of Mt. Fuji"
                data-pr-position="top"
              />
              <p>Theme Parks</p>
            </div>
            <div className='about-hobby'>
                <img 
                src={writing}
                alt="Avatar"
                className='avatar'
                data-pr-tooltip="A poem I wrote about relationships and time that was published in an anthology"
                data-pr-position="top"
              />
              <p>Reading/Writing</p>
            </div>
            <div className='about-hobby'>
                <img 
                src={tpt2}
                alt="Avatar"
                className='avatar'
                data-pr-tooltip="A screenshot of a rollercoaster/mountain I built in ROBLOX"
                data-pr-position="top"
              />
              <p>Video Games</p>
            </div>
            <div className='about-hobby'>
                <img 
                src={tiktok}
                alt="Avatar"
                className='avatar'
                data-pr-tooltip="My tiktok profile with ~8k followers where I recommend anime to others!"
                data-pr-position="top"
              />
              <p>Movies/Anime</p>
            </div>
          </div>
        </div>      
    </div>
  );
};

/**
            I'm a big fan of theme parks and travelling, usually trying to combine the two somehow<br />
            I enjoy reading and writing fiction novels and poetry, then discussing it with others <br />
            I love spending time with my friends, whether it be on video games or weekend trips<br />
            and I love sharing and talking about whatever new interests I have at the time<br />
 */
export default About;