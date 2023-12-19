import { useHref } from 'react-router-dom'
import Banner from '../components/Banner/Banner'
import { FaWhatsapp } from 'react-icons/fa'

const ContactUs = () => {
    const href = useHref()
    console.log(href)

    return (
        <main>
            <Banner href={href} />
            <div className='flex flex-col md:flex-row items-center justify-start md:gap-20 gap-5 py-[5%] px-[7%]'>
                <img
                    src='/DSC02762_result-2048x2048.jpg'
                    alt='contact image'
                    className='w-[640px] object-contain'
                />

                <ul className='flex flex-col  gap-2 text-[#0b315f] '>
                    <h1 className='md:text-[3.4rem] text-[2.2rem] font-lovesunshine capitalize '>
                        Contact & hours
                    </h1>
                    <li>+91 9129183929</li>
                    <li>helpdesk@avokiddos.in</li>
                    <li>Mon - Sat, 10:00 am - 6.30 pm</li>
                    <li className='flex items-center gap-2'>
                        <span>
                            <FaWhatsapp />
                        </span>
                        <span>+91 9129183929</span>
                    </li>
                </ul>
            </div>

            <div className='h-[800px] bg-[#fedacd] relative '>
                <img
                    src='/svg-image-10.svg'
                    alt=''
                    className=' md:w-[500px] hidden md:inline-block md:absolute'
                />
                <div className='bg-white   md:h-[600px] h-[550px] p-10 md:w-[750px] absolute top-[12%] md:left-[30%] left-3'>
                    <h1 className='p-8 text-center md:text-[2.3rem] text-[1.9rem]  text-[#0b315f] font-lovesunshine'>
                        Let get in touch
                    </h1>
                    <form action=''>
                        <div className='flex items-start gap-2 text-[.9rem] p-1'>
                            <input
                                type='checkbox'
                                name=''
                                id=''
                                className='cursor-pointer'
                            />
                            <label>Sign up to our newsletter</label>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-6 mt-4 md:px-2'>
                            <input
                                type='name'
                                required
                                placeholder='Your Name'
                                className='md:mr-[12rem]  md:py-[7.8px] py-[8px] outline-0 w-full focus:outline 
                                 transition-all duration-300   placeholder-[#6d839f]  outline-[#e1e2e5]  focus:outline-1 px-3 text-[.9rem]  border-b-4 border-blue-900  '
                            />
                            <input
                                type='email'
                                required
                                placeholder='Your email'
                                className='md:mt-2 md:mr-[12rem] md:py-[7.8px] py-[8px]  outline-0 focus:outline 
                                 transition-all duration-300 placeholder-[#6d839f] outline-[#e1e2e5] focus:outline-1 px-3 text-[.9rem] w-full border-b-4 border-blue-900  '
                            />
                            <textarea
                                type='email'
                                required
                                placeholder='Your Name'
                                className='md:mt-2 md:mr-[12rem] md:py-[7.8px] py-[8px] outline-0 focus:outline 
                                 transition-all duration-300 placeholder-[#6d839f] outline-[#e1e2e5]   focus:outline-1  px-3 text-[.9rem] w-full border-b-4 border-blue-900  '
                            />
                        </div>
                        <div className='mt-6 text-right md:mt-4'>
                            <button className='bg-[#0b315f] focus:outline-none focus:ring   focus:border-[#0b315f] md:mt-[2.5px] py-[8.8px] px-2 md:px-12 capitalize text-white transform active:scale-95 transition-all duration-200'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default ContactUs
