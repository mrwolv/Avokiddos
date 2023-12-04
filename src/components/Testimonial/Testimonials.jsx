import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <section
      className='relative text-white bg-center h-[600px] bg-cover md:py-4'
      style={{ backgroundImage: "url('/testimonial-background.jpg')" }}
    >
      <div className='absolute inset-0 bg-red-400 bg-opacity-50'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 mt-12 '>
        <h1 className='text-4xl font-lovesunshine'>Testimonials</h1>
        <p>Read what out customers say about us</p>
        <div className='flex items-center justify-center flex-1'>
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
