const Testimonials = () => {
  return (
    <section
      className='relative bg-cover bg-center h-[500px] text-white'
      style={{ backgroundImage: "url('/testimonial-background.jpg')" }}
    >
      <div className='absolute inset-0 bg-red-400 bg-opacity-50'></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-4xl font-bold'>Testimonials</h1>
      </div>
    </section>
  );
};

export default Testimonials;

