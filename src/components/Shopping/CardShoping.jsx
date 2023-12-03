import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiHeart } from 'react-icons/ci';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const CardShoping = () => {
  const swiperRef = useRef();
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [slidesPerGroup, setSlidesPerGroup] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
        setSlidesPerGroup(1);
      } else {
        setSlidesPerView(4);
        setSlidesPerGroup(2); // Change this to the desired value for larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially to set the state based on the initial window size

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Use slidesPerView and slidesPerGroup in your component
  // ...

  const handleNext = () => {
    swiperRef.current.slideNext();
  };
  const handlePrev = () => {
    swiperRef.current.slidePrev();
  };

  const shoppingData = [
    { id: 1, imageUrl: '/kid4.jpg', altText: 'KidImages' },
    {
      id: 2,
      imageUrl: '/kid4.jpg',
      altText: 'KidImages'
    },
    {
      id: 3,
      imageUrl: '/kid4.jpg',
      altText: 'KidImages'
    },
    {
      id: 4,
      imageUrl: '/kid4.jpg',
      altText: 'KidImages'
    },
    {
      id: 5,
      imageUrl: '/kid4.jpg',
      altText: 'KidImages'
    },
    {
      id: 6,
      imageUrl: '/kid4.jpg',
      altText: 'KidImages'
    },
    {
      id: 7,
      imageUrl: '/kid4.jpg',
      altText: 'KidImages'
    },
    {
      id: 8,
      imageUrl: '/kid4.jpg',
      altText: 'KidImages'
    }
  ];

  return (
    <article className='flex items-center justify-between mt-8 px-28 md:px-32 md:mt-20 md:gap-8'>
      <span>
        <IoIosArrowBack
          className='text-lg hover:cursor-pointer'
          onClick={handlePrev}
        />
      </span>
      <Swiper
        slidesPerGroup={slidesPerGroup}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        loop={true}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        speed={1000}
      >
        {shoppingData.map(item => (
          <>
            <SwiperSlide className='hover:cursor-pointer'>
              <figure className='relative' key={item.id}>
                <img src={item.imageUrl} alt={item.altText} />
              </figure>
              <span className=' absolute top-[10px] right-[8px] md:absolute md:top-[28px] md:right-[24px] '>
                <CiHeart className='text-[23px] font-semibold hover:text-red-400 hover:cursor-pointer' />
              </span>
              <div className=' absolute top-[50%] left-[12%]  md:absolute md:top-[50%] md:left-[10%] '>
                <button className='border-none bg-[#EF564C] text-white md:px-10 md:py-2.5 text-[.9rem] px-6 py-1.5 md:text-[1.1rem]'>
                  Add to cart
                </button>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      <span>
        <IoIosArrowForward
          className='text-lg hover:cursor-pointer'
          onClick={handleNext}
        />
      </span>
    </article>
  );
};

export default CardShoping;
