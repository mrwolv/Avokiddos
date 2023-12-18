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
                        <span><FaWhatsapp /></span>
                        <span>+91 9129183929</span>
                    </li>
                </ul>
            </div>

            <div className='h-[800px] bg-[#fedacd] relative '>
                <img
                    src='/svg-image-10.svg'
                    alt=''
                    className=' md:w-[500px] hidden md:absolute'
                />
                <div className='bg-white  h-[650px] w-[800px] absolute top-[12%] left-[30%] '>
                    <h1>Let get in touch</h1>
                </div>
            </div>
        </main>
    )
}

export default ContactUs
