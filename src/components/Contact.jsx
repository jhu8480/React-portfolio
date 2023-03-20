import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
      console.log(email);
    } else if (inputType === 'username') {
      setUserName(inputValue);
      console.log(username);
    } else {
      setMessage(inputValue);
      console.log(message);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      username,
      email,
      message
    })
  }

  return (
    <div className='container'>
      <div className="contact-container">
        <h2>Contact</h2>
        <form>
          <p>Name</p>
          <input type="text" name="username" placeholder='name' onChange={handleInputChange}/>
          <p>Email</p>
          <input type="email" name="email" placeholder='email' onChange={handleInputChange}/>
          <p>Message</p>
          <textarea cols="30" rows="10" placeholder='enter a message here...' onChange={handleInputChange}></textarea><br />
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact