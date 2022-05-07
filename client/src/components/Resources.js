import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/Resources.css';

export default function Resources(props) {
  return (
    <>
      <div
        className={`${
          props.mode === 'light' ? 'container-folder' : 'container-folder dark'
        }`}
      >
        <div className='folder1 folders'>
          <ion-icon name='calculator-outline'></ion-icon>
          <h1>Maths</h1>
          <p>
            How many Apples do I have if you have seven pencils? (Does it makes
            any sense) I also feel the same when I do math.
          </p>
          <button>
            {' '}
            <Link
              className='maths-into'
              to='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/maths'
            >
              See All Chapters
            </Link>
          </button>
        </div>
        <div className='folder2 folders'>
          <ion-icon name='bulb-outline'></ion-icon>
          <h1>Science</h1>
          <p>
            Mere Friend Bale He Science Mai Full Leke Aye But Usko Bhi Ye cheez
            nahi pata ke pehle murgi aayi ya anda
          </p>
          <button>
            {' '}
            <Link
              className='maths-into'
              to='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/science'
            >
              See All Chapters
            </Link>
          </button>
        </div>
        <div className='folder3 folders'>
          <ion-icon name='text-outline'></ion-icon>
          <h1>English</h1>
          <p>
            I Will Become A billionaire In 2023 Just Like The Stories That
            English Has (That Is Never Going To Happen)...
          </p>
          <button>
            {' '}
            <Link
              className='maths-into'
              to='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/english'
            >
              See All Chapters
            </Link>
          </button>
        </div>
        <div className='folder4 folders'>
          <ion-icon name='earth-outline'></ion-icon>
          <h1>Social Science</h1>
          <p>
            Do You Know Who Was King "Ajjacio Charles Louise"?? Same Muje Bhi
            Nahi Pata
          </p>
          <button>
            {' '}
            <Link
              className='maths-into'
              to='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/socialscience'
            >
              See All Chapters
            </Link>
          </button>
        </div>
        <div className='folder5 folders'>
          <ion-icon name='skull-outline'></ion-icon>
          <h1>Sanskrit</h1>
          <p>Isme Toh Muje Bhi Kuch Nahi Ata...</p>
          <button>
            {' '}
            <Link
              className='maths-into'
              to='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/sanskrit'
            >
              See All Chapters
            </Link>
          </button>
        </div>
        <div className='folder6 folders'>
          <ion-icon name='laptop-outline'></ion-icon>
          <h1>Computer</h1>
          <p>
            Fun Fact :- "Everyone Thinks They Are The Fastest Typer In School...
            Until "Het" Comes"
          </p>
          <button>
            {' '}
            <Link
              className='maths-into'
              to='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/computer'
            >
              See All Chapters
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
