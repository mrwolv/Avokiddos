import { CiMail } from 'react-icons/ci'
import { FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa'

const Header = () => {
    return (
        <div>
            <header className='bg-[#EF564C] h-11 text-[.8rem] text-white flex items-center justify-between md:flex md:justify-between md:px-8'>
                <div className='hidden gap-8 cursor-pointer sm:flex sm:items-center '>
                    <div className='sm:flex sm:items-center '>
                        <CiMail size={18} />
                        <span className=''>helpdesk@avokiddos.in</span>
                    </div>
                    <div className='sm:flex sm:items-center'>
                        <span>
                            <FaPhone size={14} />
                        </span>
                        <span>+91 9129183929</span>
                    </div>
                </div>
                <div className='text-[.6rem] md:text-[13.6px]'>
                    <p className='px-4 md:pr-24'>
                        20% Off on all orders above Rs. 999. Use code: fest_20
                    </p>
                </div>

                <div className='flex items-center gap-3 mr-2 md:mr-4 '>
                    <FaFacebookF size={16} className='hover:cursor-pointer' />
                    <FaInstagram size={16} className='hover:cursor-pointer' />
                </div>
            </header>
        </div>
    )
}

export default Header
