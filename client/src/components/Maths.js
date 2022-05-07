import React from 'react';
import '../components/css/Maths.css';

export default function Maths(props) {
  return (
    <>
      <div className='inner-container-math1'>
        <h1 className='tittle-chap'>{props.chapter}</h1>
        <p className='desp'>{props.description}</p>
        <div className='con-ma'>
          <p className='subject'>Subject-{props.subject}</p>
          <p className='credits'>Written By:- {props.author}</p>
        </div>
        <a href={props.img} download className='btn-maths'>
          <button>Download</button>
        </a>
      </div>
    </>
  );
}
