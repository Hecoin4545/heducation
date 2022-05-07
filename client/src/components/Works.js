import React from 'react';
import '../components/css/work.css';
import mockup from '../photos/mobileandlap.png';

export default function Works(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light' ? 'how-it-works' : 'how-it-works dark'
        }`}
      >
        <div className='left-how-work'>
          <h1 className='how-intro'>
            How Does{' '}
            <span
              className={`${
                props.mode === 'light'
                  ? 'color-change-highlight'
                  : 'color-change-highlight darkSpan'
              }`}
            >
              This App
            </span>{' '}
            Work
          </h1>
          <div className='side-how-work'>
            <div className='box-1-work  box-work-com'>
              <div className='icon-how' id='after-mate1'>
                <ion-icon
                  name='accessibility-outline'
                  className='font-change'
                ></ion-icon>
              </div>
              <div className='content-how'>
                <h1
                  className={`${
                    props.mode === 'light'
                      ? 'heading-work'
                      : 'heading-work dark'
                  }`}
                >
                  Sign-Up / Sign-In
                </h1>
                <p
                  className={`${
                    props.mode === 'light'
                      ? 'para-work'
                      : 'para-work darkSpanWhite'
                  }`}
                >
                  Mere upar Daya Kha Lo Aur Sign-Up Karo Is Website Pe.{' '}
                  <span
                    className={`${
                      props.mode === 'light'
                        ? 'color-change-high'
                        : 'color-change-high darkSpan'
                    }`}
                  >
                    Aur Agar Account Ho Toh Sign-In Bhi kar Sakte Ho...😂😂{' '}
                  </span>
                  (Toh Hi Resources Milenge).
                </p>
              </div>
            </div>

            <div className='box-2-work  box-work-com'>
              <div className='icon-how'>
                <ion-icon name='person-circle-outline'></ion-icon>
              </div>
              <div className='content-how'>
                <h1
                  className={`${
                    props.mode === 'light'
                      ? 'heading-work'
                      : 'heading-work dark'
                  }`}
                >
                  Required Subject
                </h1>
                <p
                  className={`${
                    props.mode === 'light'
                      ? 'para-work'
                      : 'para-work darkSpanWhite'
                  }`}
                >
                  (Chalo Ab Hum Bhi Thoda Professional Ho Jata Hu...){' '}
                  <span
                    className={`${
                      props.mode === 'light'
                        ? 'color-change-high'
                        : 'color-change-high darkSpan'
                    }`}
                  >
                    You will be taken to the resources page
                  </span>
                  , where you can grab the subjects you need...
                </p>
              </div>
            </div>

            <div className='box-3-work  box-work-com'>
              <div className='icon-how' id='after-mate'>
                <ion-icon name='key-outline'></ion-icon>
              </div>
              <div className='content-how'>
                <h1
                  className={`${
                    props.mode === 'light'
                      ? 'heading-work'
                      : 'heading-work dark'
                  }`}
                >
                  Download It
                </h1>
                <p
                  className={`${
                    props.mode === 'light'
                      ? 'para-work'
                      : 'para-work darkSpanWhite'
                  }`}
                >
                  Now You Can Just Download The Chapters That You Want.
                  <span
                    className={`${
                      props.mode === 'light'
                        ? 'color-change-high'
                        : 'color-change-high darkSpan'
                    }`}
                  >
                    (Ye Sabse Easy Task Hai){' '}
                  </span>
                  Agar Ye Tumse Nahi Huva Toh Tumhara IIT Kaha Se Hoga 😂
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='right-how-work'>
          <img src={mockup} alt='Mockup Img' />
        </div>
      </div>
    </>
  );
}
