import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './css/Navbar.css';

export default function Navbar(props) {
  let history = useHistory();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    history.push('/signin');
  };
  var header = document.querySelector('.nav-bar');
  window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', this.window.scrollY > 261);
  });

  const [toggle, settoggle] = useState('toggle');
  const toggleKar = () => {
    if (toggle === 'toggle') {
      settoggle('nottoggle');
    } else if (toggle === 'nottoggle') {
      settoggle('toggle');
    }
  };
  return (
    <>
      <div className={`${toggle === 'toggle' ? 'nav-bar' : 'nav-bar hei '}`}>
        <div
          className={`${
            toggle === 'toggle' ? 'left-side-nav vis' : 'left-side-nav '
          }`}
        >
          <p className='logo-name'>
            <Link to='/'>He-ducation</Link>{' '}
          </p>
        </div>
        <div
          className={`${
            toggle === 'toggle' ? 'center-side-nav vis' : 'center-side-nav'
          }`}
        >
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link
                to='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3'
                className={`${
                  localStorage.getItem('token') ? 'contain-dis' : 'conti-dist'
                }`}
              >
                Resources
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`${
            toggle === 'toggle' ? 'right-side-nav vis' : 'right-side-nav '
          }`}
        >
          <label className='dark-mode-contai'>
            <input type='checkbox' className='check-dark' />
            <span className='dark-mode-enable' onClick={props.toggleMode}>
              <ion-icon name='sunny-outline'></ion-icon>
            </span>
          </label>
          {!localStorage.getItem('token') ? (
            <form>
              <Link className='login-navbar log-btn' to='/signin'>
                Sign-in
              </Link>
              <Link className='logout-navbar log-btn' to='/signup'>
                Sign-up
              </Link>
            </form>
          ) : (
            <form>
              <Link
                className='logout-navbar log-btn'
                to='/signin'
                onClick={handleLogOut}
              >
                Log-out
              </Link>
            </form>
          )}
        </div>
        <div className='burger' onClick={toggleKar}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
    </>
  );
}
