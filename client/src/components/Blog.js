import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/Blog.css';
import blog from '../photos/russiavsuk.jpg';
import blog1 from '../photos/blog2.jpg';

export default function Blog(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light'
            ? 'blog-container-main-ok'
            : 'blog-container-main-ok dark'
        }`}
      >
        <div className='overview-blog'>
          <h1>
            Our{' '}
            <span
              className={`${
                props.mode === 'light'
                  ? 'ketali-color-change'
                  : 'ketali-color-change darkSpan'
              }`}
            >
              Latest
            </span>{' '}
            News
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio, blanditiis! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Qui, nostrum?
          </p>
        </div>
        <div className='blog-container'>
          <div className='box-1-blog blog-con'>
            <img src={blog} alt='Img Of Rus Vs Ukr' />
            <p className='time-author'>
              March 19,2022 .{' '}
              <span
                className={`${
                  props.mode === 'light'
                    ? 'author-name'
                    : 'author-name darkSpan'
                }`}
              >
                Mana Shah
              </span>
            </p>
            <h1 className='title-blog'>Russia Vs Ukraine!! World War - 3 ?</h1>
            <p
              className={`${
                props.mode === 'light'
                  ? 'content-blog'
                  : 'content-blog darkSpanWhite'
              }`}
            >
              The start of the Russia-Ukraine conflict has a long way down the
              lane and it began in 2014 with Russia’s invasion of Ukraine.Russia
              annexed the Crimean...
            </p>
            <Link
              className='read-more-blog'
              to='/blog1/manashah/russia/vs/ukraine'
            >
              Read - Rus Vs Ukr{' '}
              <ion-icon name='chevron-forward-outline'></ion-icon>
            </Link>
          </div>

          <div className='box-2-blog blog-con'>
            <img src={blog1} alt='Img of Quantum Physic' />
            <p className='time-author'>
              March 25,2022 .{' '}
              <span
                className={`${
                  props.mode === 'light'
                    ? 'author-name'
                    : 'author-name darkSpan'
                }`}
              >
                Rishi Sai
              </span>
            </p>
            <h1 className='title-blog'>
              What is quantum physics? Everything About qu...
            </h1>
            <p
              className={`${
                props.mode === 'light'
                  ? 'content-blog'
                  : 'content-blog darkSpanWhite'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, ducimus repellendus, accusantium eum id, a asperiores
              quod commodi alias in saepe consequuntur?
            </p>
            <Link className='read-more-blog' to='/blog1/rishi/quantum/physic'>
              Read - Quantum Phy{' '}
              <ion-icon name='chevron-forward-outline'></ion-icon>
            </Link>
          </div>

          <div className='box-3-blog blog-con'>
            <img src={blog} alt='Img Of Web Dev' />
            <p className='time-author'>
              January 7,2021 .{' '}
              <span
                className={`${
                  props.mode === 'light'
                    ? 'author-name'
                    : 'author-name darkSpan'
                }`}
              >
                Shah Het
              </span>
            </p>
            <h1 className='title-blog'>
              How TO Be A Web Developer In 6 Months
            </h1>
            <p
              className={`${
                props.mode === 'light'
                  ? 'content-blog'
                  : 'content-blog darkSpanWhite'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, ducimus repellendus, accusantium eum id, a asperiores
              quod commodi alias in saepe consequuntur?
            </p>
            <button className='read-more-blog'>
              Read - Web Dev{' '}
              <ion-icon name='chevron-forward-outline'></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
