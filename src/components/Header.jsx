import React from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDiagramProject, faAddressBook, faFile } from '@fortawesome/free-solid-svg-icons'

function Header({currentPage, handlePageChange}) {
  return (
    <div className='navbar'>
      <button onClick={() => {handlePageChange('Home')}}className={currentPage === 'Home' ? 'active' : ''}><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Home</button>
      <button onClick={() => {handlePageChange('Projects')}}className={currentPage === 'Projects' ? 'active' : ''}><FontAwesomeIcon icon={faDiagramProject}></FontAwesomeIcon> Projects</button>
      <button onClick={() => {handlePageChange('Contact')}}className={currentPage === 'Contact' ? 'active' : ''}><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon> Contact</button>
      <button onClick={() => {handlePageChange('Resume')}}className={currentPage === 'Resume' ? 'active' : ''}><FontAwesomeIcon icon={faFile}></FontAwesomeIcon> Resume</button>
    </div>
  )
}

export default Header