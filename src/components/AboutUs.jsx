import { IoIosArrowForward } from 'react-icons/io';

const AboutUs = () => {
  return (
    <section className='text-center md:text-left md:mt-12 mt-6 bg-[#fedacd] h-[450px] md:h-[450px] md:p-8 p-3.5 md:flex  md:justify-around '>
      <div className='flex-1 mt-6 md:mt-20'>
        <div className='relative flex items-center'>
          <img
            src='vector.svg'
            alt='vector'
            width={600}
            className='md:absolute md:transform md:-translate-x-[60%] md:-translate-y-[25%] md:inset-1/2 hidden md:block'
          />
          <h1 className='md:mt-8 md:ml-16 text-center font-lovesunshine text-[#0b315f] md:text-[2.3rem] text-[1.6rem] absolute top-0 h-[400px] w-[400px]'>
            “Build up wonderful wardrobes for your little ones”
          </h1>
        </div>
      </div>

      <div className='mt-24 md:mt-10  mr-[20px] flex-1'>
        
          <h2 className='font-lovesunshine text-[#0b315f] text-[2.4rem]'>
            About us
          </h2>
        <p className='mt-4 text-[#6c7175] text-[.9rem] md:text-[1rem]'>
          Little ones outgrow their dresses faster than one can think forcing
          the parents to always be on the lookout. Avokiddos brings for you
          stylish and comfortable options to suit your sweethearts . Browse our
          catalog for the exclusive range of colours and designs.
          <p className='mt-2'>
            A quick scroll down the page will reveal all categories for kids
            fashion.
          </p>
        </p>

        <p className='flex items-center mt-6 text-white justify-centera'>
          <span>Read our Story</span>
          <IoIosArrowForward />
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
