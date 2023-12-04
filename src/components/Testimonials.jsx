const Testimonials = () => {
  return (
    <section
      className='relative bg-cover bg-center h-[500px] text-white'
      style={{ backgroundImage: "url('/testimonial-background.jpg')" }}
    >
      <div className='absolute inset-0 bg-red-400 bg-opacity-50'></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <p className='text-4xl font-bold'>Hello</p>
      </div>
    </section>
  );
};

export default Testimonials;

