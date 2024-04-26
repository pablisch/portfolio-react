// import React from 'react';
import './SingleProjectAndAboutPage.css';
import PropTypes from 'prop-types';
import { aboutData } from '../data/aboutData';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { scrollToTop } from '../utils/helpers';

const lastAboutId = aboutData[aboutData.length - 1].id;
const firstAboutId = aboutData[0].id;

const SingleAboutPage = ({
  selectedAbout,
  setSelectedAbout,
  section,
  setSection,
  theme,
}) => {
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (section !== 'about') setSection('about');
    document.title = `Pablo - ${selectedAbout.navName || selectedAbout.name}`;
  }, [section, setSection, selectedAbout]);

  useEffect(() => {
    if (!id) {
      navigate('/');
    } else {
      const about = aboutData.find((about) => about.id === id);
      if (!about) {
        navigate('/');
      } else {
        setSelectedAbout(about);
      }
    }
  }, [id, navigate, setSelectedAbout]);

  const handleOpenNewTab = () => {
    window.open(selectedAbout.url, '_blank');
  };

  const handleNextSection = () => {
    if (selectedAbout.id === lastAboutId) {
      setSelectedAbout(aboutData[0]);
    } else {
      setSelectedAbout(
        aboutData[Number(selectedAbout.id) - (Number(firstAboutId) - 1)]
      );
    }
    scrollToTop();
  };

  const handlePreviousSection = () => {
    if (selectedAbout.id === firstAboutId) {
      setSelectedAbout(aboutData[aboutData.length - 1]);
    } else {
      setSelectedAbout(
        aboutData[Number(selectedAbout.id) - (Number(firstAboutId) + 1)]
      );
    }
    scrollToTop();
  };

  const handleReturnToAboutMes = () => {
    setSelectedAbout({});
    navigate('/more-about-me');
  };

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
            style={{
              width: selectedAbout.iframeWidth,
              height: selectedAbout.iframeHeight,
              border: selectedAbout.iframeBorder,
            }}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
          <div className='panel-buttons'>
            <Button
              className='btn about-iframe-btn space-right'
              onClick={handlePreviousSection}>
              <BiSolidLeftArrow className='arrow-icon' /> Previous
            </Button>
            <Button
              className='btn about-iframe-btn space-right'
              onClick={handleOpenNewTab}>
              Open in a new tab
            </Button>
            <Button
              className='btn about-iframe-btn space-right'
              onClick={handleReturnToAboutMes}>
              Return to selection{' '}
              <RiArrowGoBackLine className='arrow-icon return-icon' />
            </Button>
            <Button
              className='btn about-iframe-btn'
              onClick={handleNextSection}>
              Next <BiSolidRightArrow className='arrow-icon' />
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
  section: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default SingleAboutPage;
