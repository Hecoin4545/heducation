import React from 'react';
import '../components/css/Blog1.css';

export default function Blog1(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light' ? 'container-blog1' : 'container-blog1 dark'
        }`}
      >
        <h1>{props.heading}</h1>
        <p>{props.para}</p>
      </div>
      <div
        className={`${
          props.mode === 'light'
            ? 'container-credits'
            : 'container-credits dark'
        }`}
      >
        <p>Written By :- {props.written}</p>
        <p>Written On :-{props.WrittenOn}</p>
      </div>
    </>
  );
}
