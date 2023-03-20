import React, {useState} from 'react'
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import Header from './Header';

function Portfolio() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </>
  )
}

export default Portfolio