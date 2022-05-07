import React, { useState } from 'react';
import '../components/css/Signup.css';
import { Link } from 'react-router-dom';
import imgMob from '../photos/tabwithmobile.png';

export default function Signup(props) {
  const [credentials, setcredentials] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      localStorage.setItem('token', json.token);
      window.location.href =
        'https://heducation-resources.herokuapp.com/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3';
    } else {
      alert('invalid Credentials');
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div
        className={`${
          props.mode === 'light'
            ? 'main-login-container'
            : 'main-login-container dark'
        }`}
      >
        <div className='left-login-content'>
          <div className='content-login'>
            <div className='over-para-login'>
              <h1 className='heading-login'>
                SignUp - To Get Access To Resources{' '}
              </h1>
              <p className='para-login'>
                Don't Have An Account? Don't Worry Just Sign It Up And Start
                Your Journey
              </p>
            </div>
          </div>
          <form method='POST' onSubmit={handleSubmit} className='forunique'>
            <div className='login-input-btn'>
              <input
                type='text'
                placeholder='UserName'
                id='name'
                aria-describedby='emailHelp'
                name='name'
                onChange={onChange}
                required
                minLength='2'
              />
              <ion-icon name='person-outline' id='icon-login'></ion-icon>
              <input
                type='email'
                placeholder='Email'
                id='email'
                aria-describedby='emailHelp'
                name='email'
                onChange={onChange}
                required
              />
              <ion-icon name='mail-outline' id='icon-login'></ion-icon>
              <input
                type='password'
                placeholder='Password'
                id='password'
                name='password'
                onChange={onChange}
                required
                minLength='8'
              />
              <ion-icon name='bag-add-outline' id='icon-login'></ion-icon>
              <p className='sign-up-direct'>
                Have An Account? <Link to='/signin'> Sign in</Link> Instead...
              </p>
              {/* ok */}
              <button className='login-submit-btn'>Sign-Up</button>
            </div>
          </form>
        </div>
        <div className='right-login-content'>
          <img src={imgMob} alt='Mobile Img' />
        </div>
      </div>
    </>
  );
}
