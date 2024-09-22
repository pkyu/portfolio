import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { Dialog } from 'primereact/dialog';
import projectsData from './ProjectsData.json';
import projects from '../../assets/projects.png';
import coastle from '../../assets/coastle.png';
import coastlegameplay from '../../assets/coastlegameplay.gif';
import coastlefirstweek from '../../assets/coastlefirstweek.png';
import coastlestats from '../../assets/coastlestats.png';
import pantrypal from '../../assets/pantrypal.png';
import meetbd from '../../assets/meetbd.png';
import meetbdgroup from '../../assets/meetbdgroup.png';
import meetbdschedule from '../../assets/meetbdschedule.png';
import meetbdsupabase from '../../assets/meetbdsupabase.png';
import intheshadows from '../../assets/intheshadowslevel.png';
import eyemech from '../../assets/eyemechtracking.png';
import pantrypaldevice from '../../assets/pantrypaldevice.png';
import pantrypaltables from '../../assets/pantrypaltables.png';
import pantrypalpage from '../../assets/pantrypalpage.png';
import intheshadowscontrols from '../../assets/intheshadowcontrols.png';
import intheshadowslevel from '../../assets/intheshadowslevel.png';
import intheshadowsgameplay from '../../assets/intheshadowsgameplay.gif'
import './Projects.scss';

const imageMap = {
  coastle: coastle,
  pantrypal: pantrypal,
  meetbd: meetbd,
  meetbdgroup: meetbdgroup,
  meetbdschedule: meetbdschedule,
  meetbdsupabase: meetbdsupabase,
  intheshadows: intheshadows,
  eyemech: eyemech,
  coastlefirstweek: coastlefirstweek,
  coastlegameplay: coastlegameplay,
  coastlestats: coastlestats,
  pantrypaldevice: pantrypaldevice,
  pantrypaltables: pantrypaltables,
  pantrypalpage: pantrypalpage,
  intheshadowscontrols: intheshadowscontrols,
  intheshadowslevel: intheshadowslevel,
  intheshadowsgameplay: intheshadowsgameplay,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visible, setVisible] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedProject(null);
  };

  return (
    <div className='projects-container'>
      <div className='projects-title-art-container'>
          <img src={projects} alt={'Projects Title Art'} className="projects-title-art" />
      </div>
      <div className="project-tiles">
        {projectsData.map((project, index) => (
          <div key={index}>
            <Card className={'md:w-25rem'} onClick={() => openModal(project)}>
              <img src={imageMap[project.image]} alt={project.title} className="card-image" />
              <div className="card-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="card-footer">
                {project.tech.map((tech, techIndex) => (
                  <Chip key={techIndex} label={tech} className="tech-chip" />
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Dialog 
        header={selectedProject?.title} 
        visible={visible} 
        onHide={closeModal} 
        className="modal-custom"
      >
        <div className="modal-content">
        {selectedProject && selectedProject.details.map((detail, index) => {
            if (detail.type === "text") {
              return (
                <p key={index} dangerouslySetInnerHTML={{ __html: detail.content }} />
              );
            } else if (detail.type === "image") {
              const imageSrc = imageMap[detail.content];
              return <img key={index} src={imageSrc} alt={`Detail ${index}`} className="modal-image" />;
            } else if (detail.type === "video") {
              return (
                <iframe 
                  key={index} 
                  width="100%" 
                  height="315" 
                  src={detail.content} 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              );
            }
            return null;
          })}
          <Button label="Close" onClick={closeModal} />
        </div>
      </Dialog>
    </div>
  );
};

export default Projects;
