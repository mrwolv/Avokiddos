/* eslint-disable react/prop-types */

import LikeCardShop from './LikeCardShop'
import { IoIosArrowForward } from 'react-icons/io'

const ShoppingCards = ({ title, btnTitle }) => {
   
   

    return (
        <section className='flex flex-col gap-4'>
            <div className='mt-16'>
                <h1 className='font-lovesunshine text-[1.6rem] md:text-[2.7rem] text-center '>
                    {title}
                </h1>
            </div>
            <div>
                <LikeCardShop btnTitle={btnTitle} />
            </div>
            <div className='flex items-center justify-center text-center mt-7 md:mt-12'>
                <button className='mt-5 relative px-6 py-2 md:px-9 md:py-2.5 text-white bg-[#ef564c] border-none mb-2'>
                    View New Arrivals
                    <span className='absolute top-[32%] text-lg ml-1'>
                        <IoIosArrowForward />
                    </span>
                </button>
            </div>
        </section>
    )
}

export default ShoppingCards
