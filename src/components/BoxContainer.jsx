import { useState } from 'react'
// import { gsap } from 'gsap'

const BoxContainer = () => {
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)

    // /* Gsap Animation */
    // gsap.fromTo(
    //     '.animate-text',
    //     {
    //         translateY: '-100%', // Start from the top of the div
    //         opacity: 0,
    //     },
    //     {
    //         translateY: '0%', // End at the original position
    //         opacity: 1,
    //         duration: 2.3,
    //         ease: 'power3.out',
    //     }
    // )

    // gsap.fromTo(
    //     '.girls-animation-text',
    //     {
    //         scale: 0,
    //     },
    //     {
    //         scale: 1,
    //         opacity: 1,
    //         duration: 1.7,
    //         ease: 'power2.inOut',
    //     }
    // )

    // gsap.fromTo(
    //     '.new-arrival-animation-text',
    //     {
    //         y: '-100%', // Start from the top of the div
    //         opacity: 0,
    //     },
    //     {
    //         y: '0%', // End at the original position
    //         opacity: 1,
    //         duration: 2.3,
    //         ease: 'power3.out',
    //     }
    // )

    return (
        <section className='grid md:grid-cols-3 hover:cursor-pointer '>
            <div
                className='relative'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div>
                    <span
                        className={`${
                            hover
                                ? 'hidden'
                                : 'absolute top-[40%] left-[37%] bg-slate-100 px-7 py-2 text-[1.7rem] md:bg-opacity-90'
                        }`}
                    >
                        Boys
                    </span>

                    <img
                        src='kid1.jpg'
                        alt='kid1'
                        className='mx-auto md:w-full md:h-auto '
                    />
                    {/* Putting text here and animation */}
                    <div
                        className={` animate__animated animate__slideInLeft  ${
                            hover
                                ? 'bg-red-600 absolute inset-0 bg-opacity-70'
                                : 'hidden'
                        }`}
                    >
                        <div className='absolute text-white top-[40%] left-[30%] flex flex-col gap-1 '>
                            <span className='text-[1.8rem] text-center md:text-[2.1rem]'>
                                Boys Fashion
                            </span>
                            <span className='md:text-[1.2rem] text-[.9rem] text-center'>
                                <a
                                    href='https://google.com/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Explore more &#10095;{' '}
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second headimages */}
            <div
                className='relative'
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
            >
                <span
                    className={`${
                        hover2
                            ? 'hidden'
                            : 'absolute top-[40%] left-[37%] bg-slate-100 px-6 py-2 text-[1.7rem] md:bg-opacity-70 '
                    }`}
                >
                    Girls
                </span>

                <img
                    src='kid2.jpg'
                    alt='kid1'
                    className='mx-auto md:w-full md:h-auto '
                />
                {/* Putting girls animation  */}
                
                <div
                    className={`${
                        hover2
                            ? 'animate__animated animate__zoomIn  absolute inset-0 bg-red-700 bg-opacity-70 '
                            : 'hidden'
                    }`}
                >
                    <div className='absolute text-white top-[40%] left-[30%] flex flex-col gap-1 '>
                        <span className='text-[1.8rem] text-center md:text-[2.1rem]'>
                            Girls Fashion
                        </span>
                        <span className='text-[.9rem] text-center md:text-[1.2rem]'>
                            Explore more &#10095;{' '}
                        </span>
                    </div>
                </div>
            </div>
            <div
                className='relative'
                onMouseEnter={() => setHover3(true)}
                onMouseLeave={() => setHover3(false)}
            >
                <span
                    className={`${
                        hover3
                            ? 'hidden'
                            : 'absolute top-[40%] left-[26%] bg-slate-100 px-6 py-2 text-[1.7rem] md:bg-opacity-90 '
                    }`}
                >
                    New Arrivals
                </span>

                <img
                    src='kid3.jpg'
                    alt='kid1'
                    className='mx-auto md:w-full md:h-auto '
                />
                {/* Putting new arrivals animation  */}
                
                <div className=''>
                    <div
                        className={` animate__animated animate__slideInRight  ${
                            hover3
                                ? 'bg-red-600 absolute inset-0 bg-opacity-70'
                                : 'hidden'
                        }`}
                    >
                        <div className='absolute text-white top-[40%] left-[30%] flex flex-col gap-1 -z-10 '>
                            <span className='text-[1.8rem] text-center md:text-[2.1rem]'>
                                New Arrivals
                            </span>
                            <span className='text-[.9rem] md:text-[1.2rem] text-center '>
                                Explore more &#10095;{' '}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BoxContainer
