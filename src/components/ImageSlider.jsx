import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { gsap } from 'gsap';

const ImageSlider = () => {
  const animateText = () =>
    gsap.fromTo(
      '.animate-text',
      { opacity: 0, y: 400 },
      { opacity: 1, y: 0, duration: 1, ease: 'power1.out' }
    );

  return (
    <Swiper
      className='mt-8 cursor-pointer'
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={animateText}
    >
      <SwiperSlide className='relative z-10 flex items-center left-[-20px]'>
        <img src='/kids.jpg' alt='jery' className='w-full' />
        <div className=' animate-text ml-36  absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-[10rem] left-[59rem] '>
          <p className='text-[2.8rem] font-lovesunshine'>
            Summer Sorbet Collection is here for your lil ones
          </p>
          <button className='mt-4 px-7 py-1.5 border-2 border-dashed uppercase font-semibold hover:bg-[#ff9b70]'>
            shop now
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className='relative z-10 flex items-center left-[-20px]'>
        <img src='download.jpg' alt='jery' className='h-full' />
        <div className='ml-20 mt-20  absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-[11rem] left-[59rem] md:-translate-x-1/2'>
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
      <SwiperSlide>
        <img src='Header-2.jpg' alt='jery' className='h-full' />
        <div
          className='ml-52 mt-20 absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-[11rem] left-[55rem] ;
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
