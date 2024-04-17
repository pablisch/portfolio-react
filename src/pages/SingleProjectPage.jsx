// import React from 'react';
import './SingleProjectPage.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';

const SingleProjectPage = ({ selectedProject }) => {
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
    console.log('selectedProject.url', selectedProject.url)
    window.open(selectedProject.url, '_blank');
  }

  useEffect(() => {
    document.title = `Pablo - ${selectedProject.navName || selectedProject.name}`;
  }, [selectedProject]);

  return (
    <div id='single-project-page'>
      <div id='single-project-upper-section'>
        <div id='single-project-details-container'>
          <h1 id='single-project-title'>{selectedProject.name}</h1>
          <h2 id='single-project-subheading'>{selectedProject.subheading}</h2>
          <div id='single-project-description' className='para'>
            <div id='single-project-tech-badges'>
              {selectedProject.techBadges}
            </div>
            {selectedProject.descriptionText}
          </div>
        </div>
        <div id='iframe-container'>
          <iframe
            name={selectedProject.name}
            loading='lazy'
            id='single-project-iframe'
            src={selectedProject.url}
            title='CV link'
            style={{ width: '100%', height: '600px' }}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            // frameBorder='0'
            allowFullScreen></iframe>
          <Button className='btn iframe-btn' onClick={handleOpenApp} >{selectedProject.buttonText}</Button>
        </div>
      </div>
      <div id='single-project-lower-section'>
        <div id='single-project-technologiesText' className='para'>
          <p className='project-text'>{selectedProject.technologiesText}</p>
        </div>
      </div>
      <div id="bit-at-the-bottom"></div>
    </div>
  );
};

SingleProjectPage.propTypes = {
  selectedProject: PropTypes.object.isRequired,
};

export default SingleProjectPage;
