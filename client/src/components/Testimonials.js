import React from 'react';
import '../components/css/Testimonials.css';

export default function testimonials(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light' ? 'overview-test' : 'overview-test dark'
        }`}
      >
        <h1>
          What{' '}
          <span
            className={`${
              props.mode === 'light'
                ? 'color-change-test'
                : 'color-change-test darkSpan'
            }`}
          >
            People Think
          </span>{' '}
          About Us
        </h1>
      </div>
      <div
        className={`${
          props.mode === 'light'
            ? 'testimonial-container'
            : 'testimonial-container dark'
        }`}
      >
        <div className='box-1-testimonials boxes-test'>
          <img
            src='https://img.icons8.com/ios/50/000000/quote-right.png'
            alt='Quote Testimonial'
          />
          <p>
            I like the dark mode and effects and can surely say that this site
            is 100% secure.{' '}
            <span
              className={`${
                props.mode === 'light'
                  ? 'color-change-1'
                  : 'color-change-1 darkSpan'
              }`}
            >
              Nevertheless, I suggest adding some illustrations in the resources
              section and adding Hindi as a subject.
            </span>{' '}
            Thanks to He-ducation, students can access resources from this
            website if their work is incomplete. I appreciate He-ducation for
            making this website.
          </p>
          <div className='person-testimonial'>
            <p>Kalp Jethani</p>
            <span>Classmate</span>
          </div>
        </div>

        <div className='box-2-testimonials boxes-test'>
          <img
            src='https://img.icons8.com/ios/50/000000/quote-right.png'
            alt='Quote Testimonial'
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptates sunt distinctio laborum quisquam in quae est omnis
            voluptatibus soluta.
            <span
              className={`${
                props.mode === 'light'
                  ? 'color-change-1'
                  : 'color-change-1 darkSpan'
              }`}
            >
              Neque nisi dicta labore dolor placeat soluta in, suscipit
              voluptates officia nesciunt adipisci omnis blanditiis voluptas
              laborum vel qui atque.
            </span>{' '}
            Doloribus quam fugiat eaque blanditiis at nemo praesentium cumque
            vero?
          </p>
          <div className='person-testimonial'>
            <p>Kalp Jethani</p>
            <span>Classmate</span>
          </div>
        </div>
      </div>
    </>
  );
}
