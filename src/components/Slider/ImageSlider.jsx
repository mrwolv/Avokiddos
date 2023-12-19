/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import 'swiper/css';

// import MobileImageComponent from './MobileImageSlider';
// import DesktopImageSlider from './DesktopImageSlider';

import { useEffect, useState } from 'react';
import { data } from '../../constants/constant';

const MainComponent = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='mt-6 -mb-6'>
      {isMobile ? (
        <MobileImageComponent imageData={data} />
      ) : (
        <DesktopImageSlider imageData={data} />
      )}
    </section>
  );
};

export default MainComponent;


const DesktopImageSlider = ({ imageData }) => {
  const animateText = () =>
    gsap.fromTo(
      '.animate-text',
      {
        y: '100%',
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 2.3,
        ease: 'power3.out'
      }
    );

  return (
    <section>
      <Swiper slidesPerView={1} loop={true} onSlideChange={animateText}>
        {imageData.map(item => (
          <SwiperSlide key={item.id} className='relative'>
            <div className='mt-20 mr-6 absolute p-4 text-white rounded-md w-[25rem] top-4 right-16 animate-text'>
              <p className='text-[2.8rem] font-lovesunshine'>
                Summer Sorbet Collection is here for your lil ones
              </p>
              <p className='text-[1rem]'>{item.discountDescription}</p>
              <button className='mt-6 px-7 py-1.5 border-2 border-dashed uppercase font-semibold hover:bg-[#ff9b70] text-white'>
                Shop now
              </button>
            </div>
            <img src={item.imageUrl} alt={item.altText} className='w-full' />
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </section>
  );
};


const MobileImageComponent = ({ imageData }) => {
  const animateText = () =>
    gsap.fromTo(
      '.animate-text',
      {
        y: '100%',
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 2.3,
        ease: 'power3.out'
      }
    );

  return (
    <section>
      <Swiper
        slidesPerView={1}
        loop={true}
        onSlideChange={animateText}
        className='mt-8 cursor-pointer'
      >
        {imageData.map(item => (
          <SwiperSlide key={item.id} className='relative '>
            <div className='absolute inset-0 flex flex-col items-center justify-center animate__animated animate__zoomIn'>
              <p className=' text-center text-white text-[2.8rem] font-lovesunshine'>
                Summer Sorbet Collection is here for your lil ones
              </p>
              <p className='text-white text-[1rem]'>
                {item.discountDescription}
              </p>
              <button className='mt-4 px-7 py-1.5 border-2 border-dashed uppercase font-semibold hover:bg-[#ff9b70] text-white'>
                Shop now
              </button>
            </div>
            <img
              src={item.mobileImageUrl}
              alt={item.altText}
              className='w-full'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </section>
  );
};
