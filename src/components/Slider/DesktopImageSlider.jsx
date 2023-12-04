/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import 'swiper/css';


const ImageSlider = ({ imageData }) => {
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

export default ImageSlider;
