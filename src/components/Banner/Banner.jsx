/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react'

const Banner = ({ href }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            <div className='mt-4'>
                {href === '/contact' ? (
                    <img
                        src={`${
                            isMobile
                                ? '/public/contact.jpg'
                                : '/Contact-banner-1.jpg'
                        }`}
                        alt='Contact Image'
                        className='object-cover w-full'
                    />
                ) : (
                    <img
                        src={`${
                            isMobile ? '/mobile-header.jpg' : '/Header-3.jpg'
                        }`}
                        alt='About Us Image'
                        className='object-cover w-full'
                    />
                )}
                {isMobile ? (
                    <>
                        <span
                            className={`absolute bottom-[10%] left-[18%] 
             text-white font-lovesunshine`}
                        >
                            {href === '/contact' ? (
                                <div className='absolute bottom-0 text-center -left-16'>
                                    <h1 className='text-[1.9rem] font-lovesunshine  '>
                                        Contact us
                                    </h1>
                                    <p className=' text-[.8rem] w-[350px]'>
                                        Drop us a line below and we&apos;ll
                                        follow up within 24 hours. You can also
                                        contact us at
                                        <a href='#'>helpdesk@avokiddos</a>
                                        in for any questions.
                                    </p>
                                </div>
                            ) : (
                                <span className='text-[2.6rem]  font-lovesunshine absolute bottom-8  text-center left-4'>
                                    About us
                                </span>
                            )}
                        </span>
                    </>
                ) : (
                    <span className={`   text-white `}>
                        {href === '/contact' ? (
                            <div className='absolute text-center bottom-[10%] right-[5%]'>
                                <h1 className='text-[2.8rem] font-lovesunshine '>
                                    Contact us
                                </h1>
                                <p className='md:w-[400px]'>
                                    Drop us a line below and we&apos;ll follow
                                    up within 24 hours. You can also contact us
                                    at
                                    <a href='#'> helpdesk@avokiddos</a>
                                    in for any questions.
                                </p>
                            </div>
                        ) : (
                            <span className='text-[2.8rem] font-lovesunshine absolute  bottom-[10%] right-[10%]'>
                                About us
                            </span>
                        )}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Banner
