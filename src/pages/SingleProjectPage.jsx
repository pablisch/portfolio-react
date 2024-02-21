// import React from 'react'
import './SingleProjectPage.css';
import PropTypes from 'prop-types';

const SingleProjectPage = ({selectedProject}) => {
  console.log('selectedProject', selectedProject)
  console.log('selectedProject.name', selectedProject.name)


  return (
    <div id='single-project-page'>
      {`I am the single project page for ${selectedProject.name}`}
    </div>
  )
}

SingleProjectPage.propTypes = {
  selectedProject: PropTypes.object.isRequired,
};

export default SingleProjectPage;


