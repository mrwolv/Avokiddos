import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { gsap } from 'gsap';

const ImageSlider = () => {
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
    <Swiper
      className='mt-8 cursor-pointer md:mt-10'
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onSlideChange={animateText}
    >
      <SwiperSlide className='relative hover:cursor-pointer'>
        <img src='/kids.jpg' alt='jery' height={501} />
        <div className=' animate-text ml-36 absolute  md:absolute text-white transform -translate-x-1/2 -translate-y-1/2 md:top-[10rem] md:left-[59rem] '>
          <p className='text-[2.8rem] font-lovesunshine'>
            Summer Sorbet Collection is here for your lil ones
          </p>
          <button className='mt-4 px-7 py-1.5 border-2 border-dashed uppercase font-semibold hover:bg-[#ff9b70]'>
            shop now
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide className='cursor-pointer '>
        <img src='/download.jpg' alt='jery' />
        <div className=' animate-text ml-20 mt-20  absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-[11rem] left-[59rem] md:-translate-x-1/2'>
          <p className='text-[2.8rem] font-lovesunshine'>
            Stylish & Comfortable Options For Your Li&apos;l One
          </p>
          <div className='flex flex-col items-start gap-4 px-2 mt-4'>
            <p className='slide-text'>
              20% Off on all orders above Rs. 999. Hurry!
            </p>
            <button className='px-7 py-1.5 border-2 border-dashed uppercase font-semibold hover:bg-[#ff9b70]'>
              shop now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='cursor-pointer'>
        <img src='/Header-2.jpg' alt='jery' />
        <div
          className='animate-text ml-52 mt-20 absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-[11rem] left-[55rem] ;
 '
        >
          <p className='text-[3.6rem] font-lovesunshine'>New Arrivals</p>
          <button className=' mt-10 px-7 py-1.5 border-2 border-dashed uppercase font-semibold hover:bg-[#ff9b70]'>
            shop now
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
