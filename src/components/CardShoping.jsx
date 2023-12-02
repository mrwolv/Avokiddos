import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiHeart } from 'react-icons/ci';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';


const CardShoping = () => {
  const swiperRef = useRef();

  const handleNext = () => {
    swiperRef.current.slideNext();
  };
  const handlePrev = () => {
    swiperRef.current.slidePrev();
  };

  const shoppingData = [
    {
      id: 1,
      imageUrl: '/public/kid4.jpg',
      altText: 'KidImages',
    },
    {
      id: 2,
      imageUrl: '/public/kid4.jpg',
      altText: 'KidImages',
    },
    {
      id: 3,
      imageUrl: '/public/kid4.jpg',
      altText: 'KidImages',
    },
    {
      id: 4,
      imageUrl: '/public/kid4.jpg',
      altText: 'KidImages',
    },
    {
      id: 5,
      imageUrl: '/public/kid4.jpg',
      altText: 'KidImages',
    },
    {
      id: 6,
      imageUrl: '/public/kid4.jpg',
      altText: 'KidImages',
    },
    {
      id: 7,
      imageUrl: '/public/kid4.jpg',
      altText: 'KidImages',
    },
    {
      id: 8,
      imageUrl: '/public/kid4.jpg',
      altText: 'KidImages',
    },
  ];

  return (
    <article className="px-28 md:px-32 mt-8 md:mt-20 md:flex md:items-center md:gap-8">
      <span>
        <IoIosArrowBack
          className="text-lg hover:cursor-pointer"
          onClick={handlePrev}
        />
      </span>
      <Swiper
        slidesPerGroup={2}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
       speed={1000}
       
      >
        {shoppingData.map(item => (
          <>
            <SwiperSlide className="hover:cursor-pointer">
              <figure className="relative" key={item.id}>
                <img src={item.imageUrl} alt={item.altText} />
              </figure>
              <span className="md:absolute md:top-[28px] md:right-[24px] ">
                <CiHeart className="text-[23px] font-semibold hover:text-red-400 hover:cursor-pointer" />
              </span>
              <div className=" md:absolute md:top-[50%] md:left-[14%] ">
                <button className="border-none bg-[#EF564C] text-white px-12 py-2">
                  Add to cart
                </button>
              </div>
            </SwiperSlide>
          </>
        ))}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
      <span>
        <IoIosArrowForward
          className=" text-lg hover:cursor-pointer"
          onClick={handleNext}
        />
      </span>
    </article>
  );
};

export default CardShoping;
