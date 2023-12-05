const NewsLater = () => {
  return (
    <section
      className='md:mt-8 mt-6 bg-[#fedacd] h-[420px] md:h-[400px] 
    md:p-8 p-5 md:flex md:justify-around relative'
    >
      <div className='relative flex-1 mt-6 md:mt-16'>
        <img
          src='vector.svg'
          alt='vector'
          width={600}
          className='md:absolute md:transform md:-translate-y-[1rem] 
          md:-translate-x-[23%] hidden md:block w-[375px] rotate-90'
        />

        <img
          src='Vector-4.svg'
          alt='vector'
          width={600}
          className='md:absolute md:transform md:translate-y-[6.4rem] md:-right-[1.8rem] 
          hidden md:block w-[168px] rotate-90'
        />
      </div>
      <div
        className='absolute flex flex-col items-center text-center bg-white 
      bg-opacity-65 md:mt-[4.4rem] h-[330px] md:h-[290px] md:w-[900px] w-[320px] md:ml-11'
      >
        <h1 className='text-[1.8rem] md:text-[2.3rem] mt-2 font-lovesunshine capitalize'>
          Good Stuff in Here{' '}
        </h1>
        <p className='text-[.9rem] md:text-[1.1rem] p-2 md:p-6 text-[#6c7175] mt-4'>
          Sign up to our newsletter for product updates, new releases, some
          funny videos and more. See ya around.
        </p>
        <form
          className=' flex items-center  mt-20 text-center outline-none md:mt-0 border-b-[3px] 
         border-black  text-[#6c7175] md:w-[60%]'
        >
          <div className=''>
            <input
              type='email'
              required
              placeholder='Enter your email address here'
              className=' md:mt-2  md:mr-[12rem] py-[8.8px] outline-0 focus:outline  transition-all duration-300 focus:outline-1 px-3 text-[.9rem] md:w-[100%]  '
            /> 
           
          </div>
          <button className='hover:bg-[#0b315f] focus:outline-none focus:ring focus:border-[#0b315f] md:mt-[2.5px] py-[8.8px] px-1 md:px-12 capitalize text-white transform active:scale-95 transition-all duration-200'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLater;
