// import React from 'react';
import './SingleProjectAndAboutPage.css';
import { projectData } from '../data/projectData';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { scrollToTop } from '../utils/helpers';
import { useScreenWidth } from '../context/ScreenWidthProvider';

const lastProjectId = projectData[projectData.length - 1].id;
const firstProjectId = projectData[0].id;

const SingleProjectPage = ({ selectedProject, setSelectedProject }) => {
  const navigate = useNavigate();
  const screenWidth = useScreenWidth();

  const { id } = useParams();

  console.log('selectedProject', selectedProject);
  console.log('selectedProject.name', selectedProject.name);

  useEffect(() => {
    if (!id) {
      console.log('Project ID not found in URL, redirecting to home');
      navigate('/');
    } else {
      const project = projectData.find(project => project.id === id);
      if (!project) {
        console.log('Project not found, redirecting to home');
        navigate('/');
      } else {
        console.log('Setting selected project', project);
        setSelectedProject(project);
      }
    }
  }, [id, navigate, setSelectedProject]);

  const handleOpenApp = () => {
    console.log('selectedProject.url', selectedProject.url);
    if (selectedProject.name === 'Lair BnB') {
      window.open(selectedProject.repo, '_blank');
    } else {
      window.open(selectedProject.url, '_blank');
    }
  };

  const handleOpenRepo = () => {
    window.open(selectedProject.repo, '_blank');
  };

  const handleReturnToProjects = () => {
    setSelectedProject({});
    navigate('/');
  };

  const handleNextSection = () => { 
    if (selectedProject.id === lastProjectId) {
      setSelectedProject(projectData[0]);
    } else {
      setSelectedProject(projectData[Number(selectedProject.id) - (Number(firstProjectId) - 1)]);
    }
    scrollToTop();
  }

  const handlePreviousSection = () => { 
    if (selectedProject.id === firstProjectId) {
      setSelectedProject(projectData[projectData.length - 1]);
    } else {
      setSelectedProject(projectData[Number(selectedProject.id) - (Number(firstProjectId) + 1)]);
    }
    scrollToTop();
  };

  useEffect(() => {
    document.title = `Pablo - ${
      selectedProject.navName || selectedProject.name
    }`;
  }, [selectedProject]);

  console.log('tech', selectedProject?.techBadgesArray?.[0]);

  const size = Math.min((selectedProject?.techBadgesArray?.[0]?.scale || '30') * (screenWidth / (1500 - ((1500 - screenWidth) / 2))), (selectedProject?.techBadgesArray?.[0]?.scale || '30'));

  return (
    <div id='single-subject-page'>
      <div id='single-subject-upper-section'>
        <div id='single-subject-headers-and-description-1'>
          <h1 id='single-subject-title'>{selectedProject.name}</h1>
          <h2 id='single-subject-subheading'>{selectedProject.subheading}</h2>
          <div id='single-subject-description' className='paragraph'>
            <div id='single-project-tech-badges'>
              {selectedProject.techBadges}
            </div>
            <div id='single-project-tech-badges'>
              {selectedProject?.techBadgesArray?.[1].map((badge) => (
                <img
                  key={badge.alt}
                  src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${badge.src}`}
                  alt={badge.alt}
                  className={badge.class || ''}
                  width={size}
                  height={size}
                />
              ))
                }
            </div>
            {selectedProject.descriptionText}
          </div>
        </div>
        <div id='iframe-container'>
          <iframe
            name={selectedProject.name}
            loading='lazy'
            id='feature-iframe'
            src={selectedProject.url}
            title='CV link'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            // frameBorder='0'
            allowFullScreen></iframe>
          <div className='panel-buttons'>
          <Button
              className='btn space-right project-iframe-btn'
              onClick={handlePreviousSection}>
              <BiSolidLeftArrow className='arrow-icon' />
            </Button>
            <Button id='responsiveness-btn' className='btn space-right project-iframe-btn'>
              {selectedProject.responsivenessText}
            </Button>
            <Button
              className='btn space-right project-iframe-btn repo-btn'
              onClick={handleOpenApp}>
              Open app{' '}
              <img
                src='/images/newtab.png'
                alt='new tab icon'
                className='btn-icon new-tab-btn-logo'
              />
            </Button>
            <Button
              className='btn space-right project-iframe-btn repo-btn'
              onClick={handleOpenRepo}>
              Open repo{' '}
              <img
                src='/images/github-logo.png'
                alt='GitHub logo'
                className='btn-icon github-btn-logo'
              />
            </Button>
            <Button
              className='btn space-right project-iframe-btn projects-btn'
              onClick={handleReturnToProjects}>
              Return to Projects <RiArrowGoBackLine className='arrow-icon return-icon' />
            </Button>
            <Button
              className='btn project-iframe-btn'
              onClick={handleNextSection}>
              <BiSolidRightArrow className='arrow-icon' />
            </Button>
          </div>
        </div>
      </div>
      <div id='single-subject-lower-section'>
        <div id='single-project-technologiesText' className='paragraph'>
          <p className='project-text'>{selectedProject.technologiesText}</p>
        </div>
      </div>
      <div id='bit-at-the-bottom'></div>
    </div>
  );
};

SingleProjectPage.propTypes = {
  selectedProject: PropTypes.object.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
};

export default SingleProjectPage;
