import React from 'react';
import Maths from './Maths';
import '../components/css/Maths.css';

import realNumbers from '../pdf/realnumber.pdf';
import poly from '../pdf/polynomials.pdf';
import proba from '../pdf/probability.pdf';

export default function OutMaths(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light'
            ? 'container-maths-chapter'
            : 'container-maths-chapter dark'
        }`}
      >
        <Maths
          chapter='Chapter-1 , Real Numbers '
          description=' Combinations Of Rational And Irrational Numbers'
          subject='Maths'
          author='Shah Het'
          img={realNumbers}
        />
        <Maths
          chapter='Chapter-2 , Polynomials'
          description='Playing With Letter Are Known As Polynomials'
          subject='Maths'
          author='Shah Het'
          img={poly}
        />
        <Maths
          chapter='Chapter-15 , Probability'
          description='A probability is a number that reflects the chance or likelihood...'
          subject='Maths'
          author='Shah Het'
          img={proba}
        />
      </div>
    </>
  );
}
