import React from 'react';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects() {
  return (
    <div className='container'>
      <div className='projects-container'>
        <div className='project project-1'>
          <a href="https://stack-under-flow.herokuapp.com/" target="_blank" rel="noreferrer">Blog Website</a>
          <a href="https://github.com/jhu8480/stack-under-flow" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>
        <div className='project'></div>
        <div className='project'></div>
        <div className='project'></div>
        <div className='project'></div>
        <div className='project'></div>
      </div>
    </div>
  )
}

export default Projects