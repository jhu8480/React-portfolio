import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='footer'>
      <a href="https://github.com/jhu8480" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
      <a href="https://ca.linkedin.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
      <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
    </div>
  )
}

export default Footer