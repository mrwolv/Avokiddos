import CardShoping from './CardShoping';
import { IoIosArrowForward } from 'react-icons/io';

const ShoppingCards = () => {
  return (
    <section className='flex flex-col gap-4'>
      <div className='mt-20'>
        <h1 className='font-lovesunshine text-[1.3rem] md:text-[2.4rem] text-center '>
          Shop Our New Arrivals
        </h1>
      </div>
      <div>
        <CardShoping />
      </div>
      <div className='flex items-center justify-center text-center mt-7 md:mt-12'>
        <button className='mt-5 relative px-12 py-2 text-white bg-[#ef564c] border-none'>
          View New Arrivals
          <span className='absolute top-[32%] text-lg ml-4'>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ShoppingCards;
