import React from 'react';
import '../components/css/Science.css';
import Science from './Science';
import life from '../pdf/lifeprocesses.pdf';
import chemical from '../pdf/chemical.pdf';
import prac from '../pdf/chempractical.pdf';

export default function OutScience(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light'
            ? 'container-maths-chapter'
            : 'container-maths-chapter dark'
        }`}
      >
        <Science
          chapter='Chapter-6 , Life Processes'
          description='Basically Talks About Living Organisms.'
          subject='Science'
          author='Gopesh Italia'
          img={life}
        />
        <Science
          chapter='Chapter-1 , Chemical Reaction and Equation'
          description='Types Of Reaction etc...'
          subject='Science'
          author='Gopesh Italia'
          img={chemical}
        />

        <Science
          chapter='Chemistry Practicle'
          description='Practicle Based On Chemical Reactions '
          subject='Science'
          author='Shah Het'
          img={prac}
        />
      </div>
    </>
  );
}
