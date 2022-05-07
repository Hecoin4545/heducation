import React from 'react';
import Computer from './Computer';
import '../components/css/Computer.css';
import ComputerChap from '../pdf/Computer.pdf';

export default function OutComputer(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light'
            ? 'container-maths-chapter'
            : 'container-maths-chapter dark'
        }`}
      >
        <Computer
          chapter='chapter-1 '
          description='PART B UNIT 1...'
          subject='Computer'
          author='Kalp Jethani'
          img={ComputerChap}
        />
      </div>
    </>
  );
}
