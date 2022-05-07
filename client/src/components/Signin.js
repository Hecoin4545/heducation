import React, { useState } from 'react';
import '../components/css/Signin.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import imgMob from '../photos/tabwithmobile.png';

export default function Signin(props) {
  let history = useHistory();
  const [credentials, setcredentials] = useState({ email: '', password: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      localStorage.setItem('token', json.token);
      history.push(
        '/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3'
      );
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
                Login - To Get Access To Resources{' '}
              </h1>
              <p className='para-login'>
                If You Have An Account Then Login And Start Your Journey Else
                Sign Up
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className='forunique'>
            <div className='login-input-btn'>
              <input
                type='email'
                placeholder='Email'
                id='email'
                aria-describedby='emailHelp'
                name='email'
                onChange={onChange}
                value={credentials.email}
                required
              />
              <ion-icon name='mail-outline' id='icon-login'></ion-icon>
              <input
                type='password'
                placeholder='Password'
                id='password'
                name='password'
                onChange={onChange}
                value={credentials.password}
                minLength='8'
              />
              <ion-icon name='bag-add-outline' id='icon-login'></ion-icon>
              <p className='sign-up-direct'>
                Don't Have An Account? <Link to='/signup'> Sign Up</Link>{' '}
                Instead...
              </p>

              <button className='login-submit-btn' type='submit'>
                Login
              </button>
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
