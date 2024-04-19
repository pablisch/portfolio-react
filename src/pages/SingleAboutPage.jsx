// import React from 'react';
import './SingleProjectAndAboutPage.css';
import PropTypes from 'prop-types';
import { aboutData } from '../data/aboutData';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { RiArrowGoBackLine } from "react-icons/ri";


const lastAboutId = aboutData[aboutData.length - 1].id;
const firstAboutId = aboutData[0].id;


const SingleAboutPage = ({ selectedAbout, setSelectedAbout }) => {
  const navigate = useNavigate();
  // console.log('test - about data index 0:', aboutData[0]);
  console.log('lastAboutId:', lastAboutId);

  useEffect(() => {
    if (!selectedAbout.name) {
      console.log('selectedAbout is empty');
      navigate('/');
      console.log('should have navigated back to /');
    }
  }, [selectedAbout, navigate]);

  // console.log('selectedAbout.name', selectedAbout.name);

  const handleOpenNewTab = () => {
    console.log('selectedAbout.url', selectedAbout.url);
    window.open(selectedAbout.url, '_blank');
  };

  const handleNextSection = () => { 
    if (selectedAbout.id === lastAboutId) {
      setSelectedAbout(aboutData[0]);
    } else {
      setSelectedAbout(aboutData[Number(selectedAbout.id) - (Number(firstAboutId) - 1)]);
    }
  }

  const handlePreviousSection = () => { 
    if (selectedAbout.id === firstAboutId) {
      setSelectedAbout(aboutData[aboutData.length - 1]);
    } else {
      setSelectedAbout(aboutData[Number(selectedAbout.id) - (Number(firstAboutId) + 1)]);
    }
  };

  const handleReturnToAboutMes = () => {
    setSelectedAbout({});
    navigate('/more-about-me');
  };

  useEffect(() => {
    console.log('selectedAbout.id', selectedAbout.id);
    navigate(`/more-about-me/${selectedAbout.id}`);
  }, [selectedAbout, navigate]);


  useEffect(() => {
    document.title = `Pablo - ${selectedAbout.navName || selectedAbout.name}`;
  }, [selectedAbout]);

  return (
    <div id='single-subject-page'>
      <div id='single-subject-upper-section'>
        <div id='single-subject-headers-and-description-1'>
          <h1 id='single-subject-title'>{selectedAbout.name}</h1>
          <h2 id='single-subject-subheading'>{selectedAbout.subheading}</h2>
          <div id='single-subject-description' className='paragraph'>
            {selectedAbout.descriptionText1}
          </div>
        </div>
        <div id='iframe-container'>
          <iframe
            name={selectedAbout.name}
            loading='lazy'
            id='feature-iframe'
            src={selectedAbout.url}
            title='CV link'
            // style={{ width: selectedAbout.iframeWidth || '100%', height: selectedAbout.iframeHeight || '600px' }}
            // style={{ width: selectedAbout.iframeWidth, height: selectedAbout.iframeHeight}}
            style={{
              width: selectedAbout.iframeWidth,
              height: selectedAbout.iframeHeight,
              border: selectedAbout.iframeBorder,
            }}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            // frameBorder='0'
            allowFullScreen></iframe>
          <div className='panel-buttons'>
            <Button className='btn about-iframe-btn space-right' onClick={handlePreviousSection}>
            <BiSolidLeftArrow className='arrow' /> Previous
            </Button>
            <Button className='btn about-iframe-btn space-right' onClick={handleOpenNewTab}>
              Open in a new tab
            </Button>
            <Button className='btn about-iframe-btn space-right' onClick={handleReturnToAboutMes}>
              Return to selection <RiArrowGoBackLine className='arrow return' />
            </Button>
            <Button className='btn about-iframe-btn' onClick={handleNextSection}>
            Next <BiSolidRightArrow className='arrow' />
            </Button>
          </div>
        </div>
      </div>
      <div id='single-subject-lower-section'>
        <div id='single-about-description-text-2' className='paragraph'>
          <p className='project-text'>{selectedAbout.descriptionText2}</p>
        </div>
      </div>
      <div id='bit-at-the-bottom'></div>
    </div>
  );
};

SingleAboutPage.propTypes = {
  selectedAbout: PropTypes.object.isRequired,
  setSelectedAbout: PropTypes.func.isRequired,
};

export default SingleAboutPage;
