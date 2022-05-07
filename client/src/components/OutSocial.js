import React from 'react';
import Social from './Social';
import power from '../pdf/powersharing.pdf';
import national from '../pdf/nationalism.pdf';
import '../components/css/Social.css';

export default function OutSocial(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light'
            ? 'container-maths-chapter'
            : 'container-maths-chapter dark'
        }`}
      >
        <Social
          chapter='Chapter-1 , Power Sharing '
          description='A system of political arrangement in which powers are...'
          subject='S.S'
          author='Tisha Hemnani'
          img={power}
        />
        <Social
          chapter='Chapter-1 , nationalism in india '
          description='Talked About Independence Of India'
          subject='S.S'
          author='Tisha Hemnani'
          img={national}
        />
      </div>
    </>
  );
}
