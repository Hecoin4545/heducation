import React from 'react';
import Sanskrit from './Sanskrit';
import '../components/css/Sanskrit.css';
import sanskrit from '../pdf/Sanskrit.pdf';

export default function Outsanskrit(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light'
            ? 'container-maths-chapter'
            : 'container-maths-chapter dark'
        }`}
      >
        <Sanskrit
          chapter='Sanskrit Grammer'
          description='Sanskrit Grammer Jo Muje Bhi Nahi Aata'
          subject='Sanskrit'
          author='shah het'
          img={sanskrit}
        />
      </div>
    </>
  );
}
