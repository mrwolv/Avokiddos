import { Swiper, SwiperSlide } from 'swiper/react';
import { CiHeart } from 'react-icons/ci';

const CardShoping = () => {
  return (
    <article className="px-28 md:px-44 mt-8 md:mt-20">
      <Swiper spaceBetween={50} slidesPerView={4} loop={true}>
        <SwiperSlide>
          <figure className="relative">
            <img src="/public/kid4.jpg" alt="kid4" />
          </figure>
          <span className="md:absolute top-[28px] right-[24px] ">
            <CiHeart className="text-[23px] font-semibold hover:text-red-400 hover:cursor-pointer" />
          </span>
          <div className=" md:absolute md:top-[50%] md:left-[14%] ">
            <button className="border-none bg-[#EF564C] text-white px-12 py-2">
              Add to cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src="/public/kid4.jpg" alt="kid4" />
          </figure>
          <span className="md:absolute top-[28px] right-[24px] ">
            <CiHeart className="text-[23px] font-semibold hover:text-red-400 hover:cursor-pointer" />
          </span>
          <div className=" md:absolute md:top-[50%] md:left-[14%] ">
            <button className="border-none bg-[#EF564C] text-white px-12 py-2">
              Add to cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src="/public/kid4.jpg" alt="kid4" />
          </figure>
          <span className="md:absolute top-[28px] right-[24px] ">
            <CiHeart className="text-[23px] font-semibold hover:text-red-400 hover:cursor-pointer" />
          </span>
          <div className=" md:absolute md:top-[50%] md:left-[14%] ">
            <button className="border-none bg-[#EF564C] text-white px-12 py-2">
              Add to cart
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src="/public/kid4.jpg" alt="kid4" />
          </figure>
          <span className="md:absolute top-[28px] right-[24px] ">
            <CiHeart className="text-[23px] font-semibold hover:text-red-400 hover:cursor-pointer" />
          </span>
          <div className=" md:absolute md:top-[50%] md:left-[14%] ">
            <button className="border-none bg-[#EF564C] text-white px-12 py-2">
              Add to cart
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default CardShoping;
