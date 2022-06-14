import React from 'react';
import English from './English';
import '../components/css/English.css';
import letterGod from '../pdf/lettergod.pdf';
import mandela from '../pdf/mandela.pdf';
import grammer from '../pdf/englishgramm.pdf';
import triump from '../pdf/triumph.pdf';

export default function OutEnglish(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light'
            ? 'container-maths-chapter'
            : 'container-maths-chapter dark'
        }`}
      >
        <English
          chapter='Chapter-1 , A Letter To God'
          description='A Firm Believe In God Can Be Seen Throught This Story'
          subject='English'
          author='Aryan Khatri'
          img={letterGod}
        />

        <English
          chapter='Chapter-2 ,Nelson Mandela'
          description='Freedom Against White Minorities...'
          subject='English'
          author='Aryan Khatri'
          img={mandela}
        />

        <English
          chapter='Grammer ,English'
          description='Tenses , adjective etc...'
          subject='English'
          author='Aryan Khatri'
          img={grammer}
        />

        <English
          chapter='ch :- 1   ,English'
          description=' !?? '
          subject='English'
          author='Aryan Khatri'
          img={triump}
        />
      </div>
    </>
  );
}
