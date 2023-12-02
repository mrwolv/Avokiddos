import { Swiper, SwiperSlide } from 'swiper/react';

const CardShoping = () => {
  return (
    <article className='px-28 md:px-44 mt-8 md:mt-20'>
      <Swiper spaceBetween={50} slidesPerView={4} loop={true}>
        <SwiperSlide>
          <img src="/public/kid4.jpg" alt="kid4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/kid4.jpg" alt="kid4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/kid4.jpg" alt="kid4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/kid4.jpg" alt="kid4" />
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default CardShoping;
