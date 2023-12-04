const TestimonialCard = () => {
  return (
    <div
      className=' flex flex-col-reverse md:flex-row bg-[#f3dbdb] 
    bg-opacity-90 h-[350px] w-[350px] md:w-[465px] text-black md:justify-center
    text-center 
    '
    >
      <div className='flex flex-col md:flex md:gap-2 md:mt-8 '>
        <div className='text-center'>
          <img
            src='/testimonial-images/3.jpg'
            alt=''
            className='w-32 h-32 p-6 ml-[5.8rem] rounded-full md:p-0 md:w-28 md:h-28 md:rounded-full'
          />
        </div>
        <h2 className='text-[1.3rem] md:ml-[7.2rem]'>name</h2>
      </div>
      <div className='px-4 py-1.5 md:py-4 md:px-16 md:ml-16 md:text-[1rem]'>
        <p className='text-[#6c7175] md:w-[180px] mt-4'>
          &quot;Loved the fabric and the styling of the clothes. Each piece is
          made with breathable fabric and modern designs. Comfortable clothing
          with styling is what the brand is about&quot;
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
