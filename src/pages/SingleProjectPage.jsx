// import React from 'react';
import './SingleProjectAndAboutPage.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';
import { RiArrowGoBackLine } from 'react-icons/ri';

const SingleProjectPage = ({ selectedProject, setSelectedProject }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedProject.name) {
      console.log('selectedProject is empty');
      navigate('/');
      console.log('should have navigated back to /');
    }
  }, [selectedProject, navigate]);

  console.log('selectedProject', selectedProject);
  console.log('selectedProject.name', selectedProject.name);

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

  useEffect(() => {
    document.title = `Pablo - ${
      selectedProject.navName || selectedProject.name
    }`;
  }, [selectedProject]);

  console.log('tech', selectedProject.techBadgesArray[0]);

  const size = selectedProject.techBadgesArray[0].scale;

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
              {selectedProject.techBadgesArray[1].map((badge) => (
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
            style={{ width: '100%', height: '600px' }}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            // frameBorder='0'
            allowFullScreen></iframe>
          <div className='panel-buttons'>
            <Button className='btn space-right project-iframe-btn'>
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
              className='btn project-iframe-btn projects-btn'
              onClick={handleReturnToProjects}>
              Return to Projects <RiArrowGoBackLine className='arrow return' />
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
