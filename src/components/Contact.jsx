import React, { useState } from 'react';
import '../styles/Contact.css';
import { validateEmail } from '../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      if(!validateEmail(email)) {
        setErrorMessage('Invalid Email');
      } else {
        setErrorMessage('');
      }
      setEmail(inputValue);
    } else if (inputType === 'username') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleBlur = () => {
    if(!validateEmail(email)) {
      setErrorMessage('Invalid Email');
      return;
    } else if (!username || !message) {
      setErrorMessage('Please complete the form');
    }
  }

  const handleFocus = () => {
    if(!validateEmail(email)) {
      setErrorMessage('Invalid Email');
      return;
    } else if (!username || !message) {
      setErrorMessage('Please complete the form');
    }
    setErrorMessage('');
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid Email Address');
      return;
    }

    console.log({
      username,
      email,
      message
    });
  }

  return (
    <div className='container'>
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Scarborough, ON</p>
          <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 437-299-8480</p>
          <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> jhu8480@gmail.com</p>
        </div>
        <form>
          <p>Name</p>
          <input type="text" name="username" placeholder='name' onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur}/>
          <p>Email</p>
          <input type="email" name="email" placeholder='email' onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur}/>
          <p>Message</p>
          <textarea cols="30" rows="5" placeholder='enter a message here...' onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur}></textarea><br />
          <button onClick={handleFormSubmit}>Send a message</button>
        </form>
        {errorMessage ? 
        <div>
          <p>{errorMessage}</p>
        </div> : <div></div>
        }
      </div>
    </div>
  )
}

export default Contact