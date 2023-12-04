import { IoIosArrowForward } from 'react-icons/io';

const AboutUs = () => {
  return (
    <section className=' md:mt-12 mt-6 bg-[#fedacd] h-[500px] md:h-[450px] md:p-8 p-5 md:flex  md:justify-around '>
      <div className='flex-1 mt-6 md:mt-20'>
        <div className='relative flex items-center'>
          <img
            src='vector.svg'
            alt='vector'
            width={600}
            className='md:absolute md:transform md:-translate-x-[60%] md:-translate-y-[25%] md:inset-1/2 hidden md:block'
          />
          <h1 className='md:mt-8 md:ml-16 text-center font-lovesunshine text-[#0b315f] md:text-[2.3rem] text-[1.4rem] absolute top-0 h-[400px] w-[350px]'>
            “Build up wonderful wardrobes for your little ones”
          </h1>
        </div>
      </div>
      <div className='mt-24 md:mt-10 mr-[20px] flex-1 relative'>
        <img
          src='Vector-14.png'
          alt='vector14'
          className=' absolute top-0 right-0 transform  translate-x-[30%] translate-y-[60%] md:translate-x-[22%] md:-translate-y-[3%] w-32 md:w-56 '
        />
        <h2 className='font-lovesunshine text-[#0b315f] text-[2.4rem] text-center md:text-left'>
          About us
        </h2>
        <p className='mt-4 text-[#6c7175] text-[.9rem] md:text-[1rem] text-center md:text-left'>
          Little ones outgrow their dresses faster than one can think forcing
          the parents to always be on the lookout. Avokiddos brings for you
          stylish and comfortable options to suit your sweethearts. Browse our
          catalog for the exclusive range of colors and designs.
          <p className='mt-2 '>
            A quick scroll down the page will reveal all categories for kids
            fashion.
          </p>
        </p>
        <p className='flex items-center justify-start mt-6 text-center text-white ml-28 hover:cursor-pointer md:text-left md:ml-0'>
          <span className=' hover:underline'>Read our Story</span>
          <IoIosArrowForward className='font-bold text-right text-red-500 hover:text-black' />
        </p>
        
      </div>
    </section>
  );
};

export default AboutUs;
