/* eslint-disable react/prop-types */
import CardShoping from './CardShoping';
import { IoIosArrowForward } from 'react-icons/io';

const ShoppingCards = ({title,btnTitle}) => {
  console.log("title", title)
  return (
    <section className='flex flex-col gap-4'>
      <div className='mt-20'>
        <h1 className='font-lovesunshine text-[1.3rem] md:text-[2.4rem] text-center '>
          {title}
        </h1>
      </div>
      <div>
        <CardShoping btnTitle={btnTitle} />
      </div>
      <div className='flex items-center justify-center text-center mt-7 md:mt-12'>
        <button className='mt-5 relative px-8 py-1.5 md:px-12 md:py-2.5 text-white bg-[#ef564c] border-none'>
          View New Arrivals
          <span className='absolute top-[32%] text-lg ml-2'>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ShoppingCards;
