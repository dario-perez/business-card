import React from 'react';
import profile from '../images/profile-photo.svg';

//font-awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Info() {
  return (
    <div className='info'>
      <img src={profile} className='profile' alt='profile' />
      <h1>Laura Smith</h1>
      <h4>Frontend Developer</h4>
      <a href='laurasmith.website' className='website'>
        laurasmith.website
      </a>
      <div className='contact'>
        <button className='email'>
          <FontAwesomeIcon icon={faEnvelope} className='contact-btns' />
          Email
        </button>
        <button className='linkedin'>
          <FontAwesomeIcon icon={faLinkedin} className='contact-btns' />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
