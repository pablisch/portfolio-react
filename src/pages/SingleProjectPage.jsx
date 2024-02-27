// import React from 'react';
import './SingleProjectPage.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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

  return (
    <div id='single-project-page'>
      <div id='single-project-details-container'>
        <h1 id='single-project-title'>{selectedProject.name}</h1>
        <h2 id='single-project-subheading'>{selectedProject.subheading}</h2>
        <div id='single-project-description' className='para'>
          {selectedProject.descriptionText}
        </div>
        <div id='single-project-tech-badges'>{selectedProject.techBadges}</div>
        <div id='single-project-technologiesText' className='para'>
          {selectedProject.technologiesText}
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
      </div>
    </div>
  );
};

SingleProjectPage.propTypes = {
  selectedProject: PropTypes.object.isRequired,
};

export default SingleProjectPage;
