import React from 'react';
import '../styles/Home.css'

function Home() {
  return (
    <div className='container'>
      <div className='home-container'>
        <h1 className='greeting'>Hi! My name is Jinhui</h1>
        <p>I'm a <b>web developer</b> looking for an entry-level web dev job in Toronto, ON</p>
        <div className='skills'>
          <div className='list'>
            <h2>Front end skills</h2>
            <p>Html, CSS, JavaScript, JQuery, React JS, Bootstrap, Tailwind CSS</p>
          </div>
          <div className='list'>
            <h2>Back end skills</h2>
            <p>Node, Express JS, MySQL, MongoDB, Sequelize, Mongoose</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home