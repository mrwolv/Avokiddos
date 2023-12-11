import { useParams } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/swiper-bundle.css'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

const SingleProductPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const [mainSwiper, setMainSwiper] = useState(null)

    // const handleThumbnailClick = index => {
    //     if (mainSwiper && mainSwiper.slideTo) {
    //         mainSwiper.slideTo(index)
    //     }
    // }

    const params = useParams()

    const items = [
        { title: 'Home', path: '/' },
        { title: 'Boys' },
        { title: 'Shirts' },
        { title: `${params.id}` },
    ]

    const images = [
        { id: 1, imgUrl: 'https://swiperjs.com/demos/images/nature-1.jpg' },
        { id: 2, imgUrl: 'https://swiperjs.com/demos/images/nature-2.jpg' },
        { id: 3, imgUrl: 'https://swiperjs.com/demos/images/nature-3.jpg' },
        { id: 4, imgUrl: 'https://swiperjs.com/demos/images/nature-4.jpg' },
        { id: 4, imgUrl: 'https://swiperjs.com/demos/images/nature-4.jpg' },
        { id: 5, imgUrl: 'https://swiperjs.com/demos/images/nature-5.jpg' },
        { id: 6, imgUrl: 'https://swiperjs.com/demos/images/nature-6.jpg' },
        { id: 7, imgUrl: 'https://swiperjs.com/demos/images/nature-7.jpg' },
        { id: 8, imgUrl: 'https://swiperjs.com/demos/images/nature-8.jpg' },
        { id: 9, imgUrl: 'https://swiperjs.com/demos/images/nature-9.jpg' },
        { id: 10, imgUrl: 'https://swiperjs.com/demos/images/nature-10.jpg' },
    ]

    return (
        <section>
            <div className='h-24 bg-[#fedacd] md:h-32 flex items-center justify-center md:justify-start px-10 md:px-28'>
                <Breadcrumb
                    className='text-[.9rem] md:text-[1rem]'
                    items={items}
                />
            </div>
            <div className='flex flex-col items-center justify-center gap-3 md:justify-around md:flex-row '>
                <div>
                    <div>
                        <Swiper
                            // style={{
                            //     '--swiper-navigation-color': '#fff',
                            //     '--swiper-pagination-color': '#fff',
                            // }}
                            loop={true}
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className='mySwiper2  md:w-[400px] md:mt-8 m-4 w-[250px] '
                        >
                            {images.map(image => (
                                <SwiperSlide key={image.id}>
                                    <img
                                        src={image.imgUrl}
                                        alt={image.id}
                                        className='object-contain'
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            // onSwiper={setThumbsSwiper}
                            // loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className='mySwiper w-[200px] md:h-[250px] md:w-[350px] md:mt-4'
                        >
                            {images.map(image => (
                                <SwiperSlide key={image.id}>
                                    <img src={image.imgUrl} alt={image.id} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div>right side</div>
            </div>
        </section>
    )
}

export default SingleProductPage
