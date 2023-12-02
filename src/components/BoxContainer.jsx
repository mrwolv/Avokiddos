import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const BoxContainer = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  gsap.fromTo(
    '.animate-text',
    {
      y: '100%',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 2.3,
      ease: 'power3.out',
    },
  );

  gsap.from('.new-arrival-animation-text', {
    y: '-100%',
    opacity: 0,
    stagger: 0.2,
    duration: 2.3,
    ease: 'step',
    delay: 2.3, // Offset the start of this animation by the duration of the previous one
  });

  return (
    <section className="grid md:grid-cols-3 hover:cursor-pointer">
      <div
        className="relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div>
          <span
            className={`${
              hover
                ? 'hidden'
                : 'absolute top-[40%] left-[45%] bg-slate-100 px-6 py-2 text-[1.7rem] md:bg-opacity-90 '
            }`}
          >
            Boys
          </span>

          <img src="kid1.jpg" alt="kid1" />
          <div
            className={`${
              hover
                ? 'animate-text absolute inset-0 bg-red-700 bg-opacity-70 '
                : 'hidden'
            }`}
          >
            <div className="absolute text-white top-[40%] left-[34%] flex flex-col gap-1 ">
              <span className="text-[2.1rem] text-center">Boys Fashion</span>
              <span className="text-[1.2rem] text-center">
                Explore more &#10095;{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative"
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        <span
          className={`${
            hover2
              ? 'hidden'
              : 'absolute top-[40%] left-[45%] bg-slate-100 px-6 py-2 text-[1.7rem] md:bg-opacity-70 '
          }`}
        >
          Boys
        </span>

        <img src="kid2.jpg" alt="kid1" />
        <div
          className={`${
            hover2
              ? 'animate-text absolute inset-0 bg-red-700 bg-opacity-70 '
              : 'hidden'
          }`}
        >
          <div className="absolute text-white top-[40%] left-[34%] flex flex-col gap-1 ">
            <span className="text-[2.1rem] text-center">Girls Fashion</span>
            <span className="text-[1.2rem] text-center">
              Explore more &#10095;{' '}
            </span>
          </div>
        </div>
      </div>
      <div
        className="relative"
        onMouseEnter={() => setHover3(true)}
        onMouseLeave={() => setHover3(false)}
      >
        <span
          className={`${
            hover3
              ? 'hidden'
              : 'absolute top-[40%] left-[45%] bg-slate-100 px-6 py-2 text-[1.7rem] md:bg-opacity-90 '
          }`}
        >
          New Arrivals
        </span>

        <img src="kid3.jpg" alt="kid1" />
        <div
          className={`${
            hover3
              ? 'new-arrival-animation-text absolute inset-0 bg-red-700 bg-opacity-70'
              : 'hidden'
          }`}
        >
          <div className="absolute text-white top-[40%] left-[34%] flex flex-col gap-1 ">
            <span className="text-[2.1rem] text-center">New Arrivals</span>
            <span className="text-[1.2rem] text-center">
              Explore more &#10095;{' '}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxContainer;
