/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CiHeart } from 'react-icons/ci'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { shoppingData } from '../../constants/constant'

const LikeCardShop = () => {
    const swiperRef = useRef()
    const [slidesPerView, setSlidesPerView] = useState(4)
    const [slidesPerGroup, setSlidesPerGroup] = useState(1)
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const handleMouseEnter = index => {
        setHoveredIndex(index)
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(1)
                setSlidesPerGroup(1)
            } else if (window.innerWidth < 1124) {
                setSlidesPerView(2)
                setSlidesPerGroup(1) // Change this to the desired value for larger screens
            } else {
                setSlidesPerView(4)
                setSlidesPerGroup(2)
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize() // Call the function initially to set the state based on the initial window size

        return () => {
            // Cleanup: remove the event listener when the component unmounts
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleNext = () => {
        swiperRef.current.slideNext()
    }
    const handlePrev = () => {
        swiperRef.current.slidePrev()
    }

    return (
        <article className='flex items-center justify-between gap-1 px-4 mt-8 md:px-28 md:mt-10 md:gap-8'>
            <span className='px-3 py-3  hover:bg-[#ef564c]'>
                <IoIosArrowBack
                    className='text-lg font-semibold hover:cursor-pointer'
                    onClick={handlePrev}
                />
            </span>
            <Swiper
                slidesPerGroup={slidesPerGroup}
                spaceBetween={60}
                slidesPerView={slidesPerView}
                loop={true}
                onSwiper={swiper => {
                    swiperRef.current = swiper
                }}
                speed={1000}
            >
                {shoppingData.map(item => (
                    <SwiperSlide
                        className=' hover:cursor-pointer'
                        key={item.id}
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <figure className='relative'>
                            <img src={item.imageUrl} alt={item.altText} />
                        </figure>
                        <div className='absolute top-[20px] right-[1.5rem]  md:absolute md:top-[28px] md:right-[24px] '>
                            <CiHeart className='text-[28px] font-semibold hover:text-red-400 hover:cursor-pointer ' />
                        </div>

                        <div className='absolute top-[23%] left-[16%] md:absolute md:top-[25%] md:left-[18%]'>
                            {hoveredIndex === item.id && (
                                <div className='flex flex-col items-center w-full'>
                                    {/* <button className='border-none bg-[#EF564C] text-white md:px-8 md:py-1.5 text-[1rem] px-8 py-4 md:text-[1.1rem]'>
                                        {btnTitle}
                                    </button> */}
                                    <div className='mt-[8.4rem] md:mt-[6rem] md:w-36 w-40   '>
                                        <button
                                            className='border-none bg-[#EF564C] text-white md:px-[.7rem] 
                                            md:py-[4px] text-[1rem] px-4 py-2 md:text-[1rem]  w-full text-center'
                                        >
                                            <p className=' md:w-[8rem] w-[8rem] text-center'>
                                                Select Options
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            )}
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

            <span className='px-3 py-3 hover:bg-[#ef564c]'>
                <IoIosArrowForward
                    className='text-lg font-semibold hover:cursor-pointer'
                    onClick={handleNext}
                />
            </span>
        </article>
    )
}

export default LikeCardShop
