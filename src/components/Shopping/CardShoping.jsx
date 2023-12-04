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
      } else if (window.innerWidth < 1124) {
        setSlidesPerView(2);
        setSlidesPerGroup(1); // Change this to the desired value for larger screens
      } else {
        setSlidesPerView(4);
        setSlidesPerGroup(2);
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
    <article className='flex items-center justify-between px-4 mt-8 md:px-28 md:mt-20 md:gap-8'>
      <span>
        <IoIosArrowBack
          className='text-lg hover:cursor-pointer'
          onClick={handlePrev}
        />
      </span>
      <Swiper
        slidesPerGroup={slidesPerGroup}
        spaceBetween={60}
        slidesPerView={slidesPerView}
        loop={true}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        speed={1000}
      >
        {shoppingData.map(item => (
          <SwiperSlide className=' hover:cursor-pointer' key={item.id}>
            <figure className='relative'>
              <img src={item.imageUrl} alt={item.altText} className='' />
            </figure>
            <div className='absolute top-[20px] right-[2.7rem]  lg:absolute lg:top-[28px] lg:right-[24px]'>
              <CiHeart className='text-[23px] font-semibold hover:text-red-400 hover:cursor-pointer' />
            </div>
            <div className='absolute top-[40%] left-[21%] md:absolute md:top-[40%] md:left-[10%]'>
              <button className='border-none bg-[#EF564C] text-white md:px-8 md:py-1.5 text-[1rem] px-8 py-4 md:text-[1.1rem]'>
                Add to cart
              </button>
            </div>
            <div className='flex flex-col items-center gap-1 mt-6'>
              <span className='text-center text-[1.1rem]'>
                Hooded stripped shirt
              </span>
              <span className='flex gap-3'>
                <span className='text-center font-bold text-[1rem]'>
                  &#8377; 1,550.00
                </span>
              </span>
            </div>
          </SwiperSlide>
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
