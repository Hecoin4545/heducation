import React from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';
import phone from '../photos/re.png';

export default function Home() {
  return (
    <>
      <div className='home-page-background'>
        <div className='right-home-page-side'>
          <h1>Get The Resource Download just By A Single Click</h1>

          <p>
            The site will be beneficial to both rankers and back benchers, since
            rankers only need to upload it once and everyone else can use it
            multiple times.
          </p>

          {localStorage.getItem('token') ? (
            <Link to='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3'>
              <button className='quick-access-btn'>Resources</button>
            </Link>
          ) : (
            <Link to='/signup'>
              <button className='quick-access-btn'>Sign-up</button>
            </Link>
          )}
        </div>
        <div className='left-home-page-side'>
          <img src={phone} alt='Additonal Element' />
        </div>
      </div>
    </>
  );
}
