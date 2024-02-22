// import React from 'react'
import './SingleProjectPage.css';
import PropTypes from 'prop-types';

const SingleProjectPage = ({selectedProject}) => {
  console.log('selectedProject', selectedProject)
  console.log('selectedProject.name', selectedProject.name)


  return (
    <div id='single-project-page'>
      <h1>{selectedProject.name}</h1>
      <h2>{selectedProject.subheading}</h2>
      {selectedProject.para1}
      {selectedProject.techBadges}
      {selectedProject.para2}
    </div>
  );
  
}

SingleProjectPage.propTypes = {
  selectedProject: PropTypes.object.isRequired,
};

export default SingleProjectPage;


