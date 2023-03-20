import React from 'react';
import '../styles/Header.css';

function Header({currentPage, handlePageChange}) {
  return (
    <div className='navbar'>
      <button onClick={() => {handlePageChange('Home')}}className={currentPage === 'Home' ? 'active' : ''}>Home</button>
      <button onClick={() => {handlePageChange('Projects')}}className={currentPage === 'Projects' ? 'active' : ''}>Projects</button>
      <button onClick={() => {handlePageChange('Contact')}}className={currentPage === 'Contact' ? 'active' : ''}>Contact</button>
      <button onClick={() => {handlePageChange('Resume')}}className={currentPage === 'Resume' ? 'active' : ''}>Resume</button>
    </div>
  )
}

export default Header