import React from 'react';
import '../styles/Home.css'

function Home() {
  return (
    <div className='container'>
      <div className='home-container'>
        <h1 className='greeting'>Hi! My name is Jinhui</h1>
        <p className='introduction'>I'm a <b>web developer</b> looking for a full-time entry-level web dev job in Toronto, ON. I started learning web development since October 2022. Before the career transition, I had worked in a manufacuring company for 6 years as a technical sales specialist.</p>
        <div className='skills'>
          <div className='list'>
            <hr />
            <h2>Front end skills</h2>
            <p>Html, CSS, JavaScript, JQuery, React JS, Bootstrap, Tailwind CSS</p>
            <hr />
          </div>
          <div className='list'>
            <hr />
            <h2>Back end skills</h2>
            <p>Node, Express JS, MySQL, MongoDB, Sequelize, Mongoose</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home