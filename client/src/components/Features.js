import React from 'react';
import design from '../photos/Inn.svg';
import '../components/css/feature.css';

export default function Features(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light'
            ? 'main-feature-container'
            : 'main-feature-container dark'
        }`}
      >
        <div className='features-overview'>
          <div className='sub-feature-overview'>
            <h1>
              Some Of
              <span
                className={`${
                  props.mode === 'light'
                    ? 'color-header-feature'
                    : 'color-header-feature darkSpan'
                }`}
              >
                {' '}
                The Cool Features
              </span>{' '}
              Of This Website
            </h1>
            <p>
              Due to my strong interest in frontend, I've done my best to make
              this website looks as great as possible. Besides looking good
              (according to me).
              <span
                className={`${
                  props.mode === 'light'
                    ? 'color-bold-para'
                    : 'color-bold-para darkSpan'
                }`}
              >
                , the site has some good features, such as mobile
                responsiveness, easy navigation, and single click download.
              </span>
              Additionally, I know that there are some bugs in this website,
              which I will be addressing in future updates, but for now this is
              the beta version Of My Website
            </p>
          </div>
          <img src={design} alt='Additional Design' />
        </div>
        <div className='right-overview-feature'>
          <div className='mini-box-container'>
            <div className='box-1 box'>
              <ion-icon name='speedometer-outline'></ion-icon>
              <h1
                className={`${
                  props.mode === 'light'
                    ? 'heading-features'
                    : 'heading-features darkSpan'
                }`}
              >
                Easy Navigation
              </h1>
              <p
                className={`${
                  props.mode === 'light'
                    ? 'para-heading'
                    : 'para-heading darkSpanWhite'
                }`}
              >
                Within a couple of seconds, you can switch between different
                pages
              </p>
            </div>
            <div className='box-2 box'>
              <ion-icon name='tablet-portrait-outline'></ion-icon>
              <h1
                className={`${
                  props.mode === 'light'
                    ? 'heading-features'
                    : 'heading-features darkSpan'
                }`}
              >
                Responsive
              </h1>
              <p
                className={`${
                  props.mode === 'light'
                    ? 'para-heading'
                    : 'para-heading darkSpanWhite'
                }`}
              >
                This Website is accessible on any device (laptop, mobile,
                Television etc..)
              </p>
            </div>
            <div className='box-3 box'>
              <ion-icon name='code-slash-outline'></ion-icon>
              <h1
                className={`${
                  props.mode === 'light'
                    ? 'heading-features'
                    : 'heading-features darkSpan'
                }`}
              >
                Coded
              </h1>
              <p
                className={`${
                  props.mode === 'light'
                    ? 'para-heading'
                    : 'para-heading darkSpanWhite'
                }`}
              >
                This website was built from scratch without the use of any
                additional plugins
              </p>
            </div>
            <div className='box-4 box'>
              <ion-icon name='checkmark-circle-outline'></ion-icon>
              <h1
                className={`${
                  props.mode === 'light'
                    ? 'heading-features'
                    : 'heading-features darkSpan'
                }`}
              >
                Security
              </h1>
              <p
                className={`${
                  props.mode === 'light'
                    ? 'para-heading'
                    : 'para-heading darkSpanWhite'
                }`}
              >
                This website is secure, with passwords being encrypted and links
                being secured.
              </p>
            </div>
            <div className='box-5 box'>
              <ion-icon name='globe-outline'></ion-icon>
              <h1
                className={`${
                  props.mode === 'light'
                    ? 'heading-features'
                    : 'heading-features darkSpan'
                }`}
              >
                Accessible
              </h1>
              <p
                className={`${
                  props.mode === 'light'
                    ? 'para-heading'
                    : 'para-heading darkSpanWhite'
                }`}
              >
                You can access this website anywhere in the internet from goggle
                to mosaic😅😅
              </p>
            </div>
            <div className='box-6 box'>
              <ion-icon name='server-outline'></ion-icon>
              <h1
                className={`${
                  props.mode === 'light'
                    ? 'heading-features'
                    : 'heading-features darkSpan'
                }`}
              >
                Database
              </h1>
              <p
                className={`${
                  props.mode === 'light'
                    ? 'para-heading'
                    : 'para-heading darkSpanWhite'
                }`}
              >
                Your Data Is Being Secured In Mongodb Atlas Which Is Being
                Managed By Aws(Amazon)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
