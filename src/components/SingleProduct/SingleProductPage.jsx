/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumb, ConfigProvider } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { CiHeart } from 'react-icons/ci'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import TabComponent from '../TabComponents/TabComponent'
import LikeShop from '../AlsoLikeShop/LikeShop'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// SwiperCore.use([FreeMode, Navigation, Thumbs])

const SingleProductPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
   

    const [num, setNum] = useState(1)

    const handleAdd = () => {
        setNum(num + 1)
    }

    const handleSub = () => {
        if (num === 1) {
            setNum(1)
        } else {
            setNum(num - 1)
        }
    }

    const params = useParams()

    /* Images Array */
    const images = [
        { id: 1, imgUrl: 'https://swiperjs.com/demos/images/nature-1.jpg' },
        { id: 2, imgUrl: 'https://swiperjs.com/demos/images/nature-2.jpg' },
        { id: 3, imgUrl: 'https://swiperjs.com/demos/images/nature-3.jpg' },
        { id: 4, imgUrl: 'https://swiperjs.com/demos/images/nature-4.jpg' },
        { id: 5, imgUrl: 'https://swiperjs.com/demos/images/nature-5.jpg' },
        { id: 6, imgUrl: 'https://swiperjs.com/demos/images/nature-6.jpg' },
        { id: 7, imgUrl: 'https://swiperjs.com/demos/images/nature-7.jpg' },
        { id: 8, imgUrl: 'https://swiperjs.com/demos/images/nature-8.jpg' },
        { id: 9, imgUrl: 'https://swiperjs.com/demos/images/nature-9.jpg' },
        { id: 10, imgUrl: 'https://swiperjs.com/demos/images/nature-10.jpg' },
    ]

    /* Getting BreadCrumbs using Location Router dom */
    const location = useLocation()
    const breadCrumbView = () => {
        const { pathname } = location
        const pathnames = pathname.split('/').filter(item => item)
        const capatilize = s => s.charAt(0).toUpperCase() + s.slice(1)
        return (
            <ConfigProvider
                theme={{
                    components: {
                        Breadcrumb: {
                            colorText: 'red',
                            colorBgTextHover: 'rgba(255, 255, 255, 0)',
                        },
                    },
                }}
            >
                <Breadcrumb className='text-[1rem] font-barlow'>
                    {pathnames.length > 0 ? (
                        <Breadcrumb.Item>
                            <Link to='/'>Home</Link>
                        </Breadcrumb.Item>
                    ) : (
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    )}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames
                            .slice(0, index + 1)
                            .join('/')}`
                        const isLast = index === pathnames.length - 1
                        return isLast ? (
                            <Breadcrumb.Item>
                                {capatilize(name)}
                            </Breadcrumb.Item>
                        ) : (
                            <Breadcrumb.Item>
                                <Link to={`${routeTo}`}>
                                    {capatilize(name)}
                                </Link>
                            </Breadcrumb.Item>
                        )
                    })}
                </Breadcrumb>
            </ConfigProvider>
        )
    }



    return (
        <section className='w-full'>
            <div className='h-24 bg-[#fedacd] md:h-36 flex items-center mt-2 md:mt-4 justify-center md:justify-start px-10 md:px-28'>
                {breadCrumbView()}
            </div>
            <div className='flex flex-col items-center justify-center gap-20 md:items-start md:justify-between md:flex-row md:m-20 md:px-24 '>
                {/* Left Image side */}
                <div>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        // navigation={true}
                        loop={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='mySwiper2 h-[400px] w-[400px] mt-4 cursor-pointer'
                    >
                        <div className='bg-red-400'>
                            {images.map(image => (
                                <SwiperSlide key={image.id}>
                                    <img src={image.imgUrl} alt={image.id} />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                    <Swiper
                        // onSwiper={swiper => console.log(swiper)}
                        onClick={e => console.log(e)}
                        onSlideChange={() => console.log('slide change')}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='mySwiper h-[80px] w-[350px] cursor-pointer mt-4 bg-red-400'
                    >
                        <div className='bg-red-400'>
                            {images.map(image => (
                                <SwiperSlide key={image.id}>
                                    <img src={image.imgUrl} alt={image.id} />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
                {/* Right side  */}
                <div className='flex flex-col justify-center w-full px-4 ml-2 md:items-start '>
                    <div className='md:mt-4'>
                        <h2 className='md:text-[2.1rem] text-[1.5rem] font-lovesunshine capitalize'>
                            {params.name}
                        </h2>
                        <p className='mt-2 font-semibold'>₹ 1,125.00</p>
                        <p className='mt-4 text-[.9rem] md:text-[1rem]'>
                            Your little star is going to feel handsome as his
                            dad in this snug, trendy and easy to carry shirt.
                        </p>
                    </div>
                    <div className='flex items-center gap-4 mt-6 mr-2 md:mr-0 md:gap-8 '>
                        <div className='flex items-center justify-center w-32 h-10 text-lg font-bold '>
                            <button
                                className='w-12 h-10 border-l border-orange-300 border-y active:scale-95'
                                onClick={handleSub}
                            >
                                {' '}
                                -{' '}
                            </button>
                            <button className='w-12 h-10 border-l border-orange-300 border-y'>
                                {' '}
                                {num}{' '}
                            </button>
                            <button
                                className='w-12 h-10 border border-orange-300 active:scale-95 '
                                onClick={handleAdd}
                            >
                                {' '}
                                +{' '}
                            </button>
                        </div>
                        <button className='w-40 h-10 text-white bg-red-400 '>
                            Add to card
                        </button>
                        <button className='flex items-center justify-center w-16 h-10 text-black border rounded-sm hover:text-white hover:bg-black'>
                            <CiHeart size={20} className='font-bold' />
                        </button>
                    </div>
                    <div className='mb-4 md:mb-0'>
                        <p className='flex mt-6 text-[.9rem] items-center gap-1 text-green-800 tracking-wide  '>
                            <IoMdCheckmarkCircle color='green' size={17} />
                            <span>In Stock</span>
                        </p>
                        <p className='mt-2 text-[.8rem] flex items-center gap-1'>
                            <span className='font-semibold'>Categories:</span>
                            <ul className='flex items-center gap-1 text-gray-400'>
                                <li>Boys,</li>
                                <li>Shirts</li>
                            </ul>
                        </p>

                        <p className='mt-2 text-[.8rem] flex items-center gap-1'>
                            <span className='font-semibold'>TAGs: </span>
                            <ul className='flex items-center gap-1 text-gray-400'>
                                <li>Boys,</li>
                                <li>Shirts</li>
                            </ul>
                        </p>
                        <p className='mt-4 text-[.9rem] flex items-center gap-1'>
                            <span className='font-semibold'>SKu: </span>
                            <ul className='flex items-center gap-1 text-gray-400'>
                                <li>KIDDOS010</li>
                            </ul>
                        </p>
                        <ul className='flex items-center gap-4 mt-4 md:justify-between '>
                            <li className='font-semibold'>Share</li>
                            <li className='text-gray-500 hover:text-blue-700 hover:cursor-pointer'>
                                <FaFacebook size={20} />
                            </li>
                            <li className='text-gray-500 hover:cursor-pointer hover:text-sky-500'>
                                <FaTwitter size={20} />
                            </li>
                            <li className='text-gray-500 hover:text-blue-800 hover:cursor-pointer'>
                                <FaLinkedin size={20} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>

            <TabComponent
            
            />
            </div>
            <div>
                <LikeShop
                title='You may also like'
                />
            </div>
            {/* Tabs div */}
        </section>
    )
}

export default SingleProductPage
