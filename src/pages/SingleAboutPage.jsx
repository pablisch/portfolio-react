// import React from 'react';
import './SingleProjectAndAboutPage.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';

const SingleAboutPage = ({ selectedAbout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedAbout.name) {
      console.log('selectedAbout is empty');
      navigate('/');
      console.log('should have navigated back to /');
    }
  }, [selectedAbout, navigate]);

  console.log('selectedAbout', selectedAbout);
  console.log('selectedAbout.name', selectedAbout.name);

  const handleOpenApp = () => {
    console.log('selectedAbout.url', selectedAbout.url);
    window.open(selectedAbout.url, '_blank');
  };

  useEffect(() => {
    document.title = `Pablo - ${selectedAbout.navName || selectedAbout.name}`;
  }, [selectedAbout]);

  return (
    <div id='single-project-page'>
      <div id='single-project-upper-section'>
        <div id='single-project-details-container'>
          <h1 id='single-project-title'>{selectedAbout.name}</h1>
          <h2 id='single-project-subheading'>{selectedAbout.subheading}</h2>
          <div id='single-project-description' className='para'>
            <div id='single-project-tech-badges'>
              {selectedAbout.techBadges}
            </div>
            {selectedAbout.descriptionText}
          </div>
        </div>
        <div id='iframe-container'>
          <iframe
            name={selectedAbout.name}
            loading='lazy'
            id='single-project-iframe'
            src={selectedAbout.url}
            title='CV link'
            style={{ width: '100%', height: '600px' }}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            // frameBorder='0'
            allowFullScreen></iframe>
          <Button className='btn iframe-btn' onClick={handleOpenApp}>
            {selectedAbout.buttonText}
          </Button>
        </div>
      </div>
      <div id='single-project-lower-section'>
        <div id='single-project-technologiesText' className='para'>
          <p className='project-text'>{selectedAbout.technologiesText}</p>
        </div>
      </div>
      <div id='bit-at-the-bottom'></div>
    </div>
  );
};

SingleAboutPage.propTypes = {
  selectedAbout: PropTypes.object.isRequired,
};

export default SingleAboutPage;
