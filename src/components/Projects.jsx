import React from 'react';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects() {

  return (
    <div className='container'>
      <div className='projects-container'>
        <div className='project project-1'>
          <a href="https://sic-ecommerce.herokuapp.com/" target="_blank" rel="noreferrer">Shopping Website</a>
          <a href="https://github.com/jhu8480/stack-under-flow" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>
        <div className='project project-2'>
          <a href="https://jhu8480.github.io/timed-quiz-app/" target="_blank" rel="noreferrer">Timed Quiz</a>
          <a href="https://github.com/jhu8480/timed-quiz-app" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>
        <div className='project project-3'>
        <a href="https://jhu8480.github.io/Coding-Challenge-Recipe-App/" target="_blank" rel="noreferrer">Recipe App</a>
          <a href="https://github.com/jhu8480/Coding-Challenge-Recipe-App" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>
        <div className='project project-4'>
        <a href="https://jhu8480.github.io/weather-app/" target="_blank" rel="noreferrer">Weather App</a>
          <a href="https://github.com/jhu8480/Weather-App" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>
      </div>
    </div>
  )
}

export default Projects