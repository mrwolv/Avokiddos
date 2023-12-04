import { useState } from 'react';
import { gsap } from 'gsap';

const BoxContainer = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

gsap.fromTo(
  '.animate-text',
  {
    translateY: '-100%', // Start from the top of the div
    opacity: 0
  },
  {
    translateY: '0%', // End at the original position
    opacity: 1,
    duration: 2.3,
    ease: 'power3.out'
  }
);



  gsap.fromTo(
    '.girls-animation-text',
    {
      scale: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.7,
      ease: 'power2.inOut'
    }
  );

  gsap.fromTo(
    '.new-arrival-animation-text',
    {
   y: '-100%', // Start from the top of the div
    opacity: 0
  },
  {
    y: '0%', // End at the original position
    opacity: 1,
    duration: 2.3,
    ease: 'power3.out'
  }
  );

  return (
    <section className='grid md:grid-cols-3 hover:cursor-pointer '>
<div
  className='relative'
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
>
  <div>
    <span
      className={`${
        hover
          ? 'hidden'
          : 'absolute top-[40%] left-[37%] bg-slate-100 px-6 py-2 text-[1.7rem] md:bg-opacity-90'
      }`}
    >
      Boys
    </span>

    <img
      src='kid1.jpg'
      alt='kid1'
      className='mx-auto md:w-full md:h-auto '
    />
    {/* Putting text here and animation */}
    <div
      className={`${
        hover
          ? 'animate-text absolute inset-0 bg-red-700 bg-opacity-70'
          : 'hidden'
      }`}
    >
      <div className='absolute text-white top-[40%] left-[34%] flex flex-col gap-1 '>
        <span className='text-[2.1rem] text-center'>Boys Fashion</span>
        <span className='text-[1.2rem] text-center'>
          Explore more &#10095;{' '}
        </span>
      </div>
    </div>
  </div>
</div>

{/* Secoond headimages */}
      <div
        className='relative'
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        <span
          className={`${
            hover2
              ? 'hidden'
              : 'absolute top-[40%] left-[37%] bg-slate-100 px-6 py-2 text-[1.7rem] md:bg-opacity-70 '
          }`}
        >
          Girls
        </span>

        <img src='kid2.jpg' alt='kid1' className='mx-auto md:w-full md:h-auto ' />
        {/* Putting girls animation  */}
        <div
          className={`${
            hover2
              ? 'girls-animation-text absolute inset-0 bg-red-700 bg-opacity-70 '
              : 'hidden'
          }`}
        >
          <div className='absolute text-white top-[40%] left-[34%] flex flex-col gap-1 '>
            <span className='text-[2.1rem] text-center'>Girls Fashion</span>
            <span className='text-[1.2rem] text-center'>
              Explore more &#10095;{' '}
            </span>
          </div>
        </div>
      </div>
      <div
        className='relative'
        onMouseEnter={() => setHover3(true)}
        onMouseLeave={() => setHover3(false)}
      >
        <span
          className={`${
            hover3
              ? 'hidden'
              : 'absolute top-[40%] left-[26%] bg-slate-100 px-6 py-2 text-[1.7rem] md:bg-opacity-90 '
          }`}
        >
          New Arrivals
        </span>

        <img src='kid3.jpg' alt='kid1' className = 'mx-auto md:w-full md:h-auto ' />
        {/* Putting new arrivals animation  */}
        <div
          className={`${
            hover3
              ? 'new-arrival-animation-text absolute inset-0 bg-red-700 bg-opacity-70'
              : 'hidden'
          }`}
        >
          <div className='absolute text-white top-[40%] left-[32%] flex flex-col gap-1 '>
            <span className='text-[2.1rem] text-center'>New Arrivals</span>
            <span className='text-[1.2rem] text-center'>
              Explore more &#10095;{' '}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxContainer;
