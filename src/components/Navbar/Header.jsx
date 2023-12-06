import { CiMail, CiFacebook } from 'react-icons/ci';
import { FaPhone, FaInstagram } from 'react-icons/fa6';


const Header = () => {
  return (
    <div>
      <header className='bg-[#EF564C] h-11 text-white flex items-center justify-between md:text-[13.6px] sm:flex sm:justify-between sm:px-8'>
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
          <p className='px-2'>20% Off on all orders above Rs. 999. Use code: fest_20</p>
        </div>

        <div className='flex items-center gap-3 mr-2 md:mr-4 '>
          <FaInstagram size={20} />
          <CiFacebook size={20} />
        </div>
      </header>
      
    
    </div>
  );
};

export default Header;
