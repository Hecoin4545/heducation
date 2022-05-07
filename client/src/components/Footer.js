import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/Footer.css';

export default function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='box-inner-footer'>
          <h1>He-ducation</h1>
          <p>
            (Chalo Ab Mai Thodi Apni Dukhad Dastane Bata Deta Hu). Over the past
            month I have been coding every day, facing bugs/issues constantly
            working to solve them for hours at a time, learning new concepts,
            changing designs and much more. Bas Ab Koi Ro Mat Dena
          </p>
          <div className='social-media-icon'>
            <a href='https://www.instagram.com/shahhet4/' target='_blank'>
              <ion-icon name='logo-instagram' id='gg-socials'></ion-icon>
            </a>{' '}
            <a href='https://twitter.com/ShahHet1845' target='_blank'>
              <ion-icon name='logo-twitter' id='gg-socials'></ion-icon>
            </a>
            <a href='https://github.com/Hecoin4545' target='_blank'>
              <ion-icon name='logo-github' id='gg-socials'></ion-icon>
            </a>
            <a href='https://codepen.io/shah-het' target='_blank'>
              <ion-icon name='logo-codepen' id='gg-socials'></ion-icon>
            </a>
            <a
              href='https://stackoverflow.com/users/17233309/shah-het'
              target='_blank'
            >
              <ion-icon name='logo-stackoverflow' id='gg-socials'></ion-icon>
            </a>
          </div>
        </div>

        <div className='inner-double-footer'>
          <p>Copyright@ 2021-2022 ShahHet</p>
          <p>private policy</p>
        </div>
      </div>
    </>
  );
}
