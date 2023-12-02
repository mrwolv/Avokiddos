const BoxContainer = () => {
  return (
    <div className='grid md:grid-cols-3'>
      <div className='relative'>
        <span className='absolute top-[40%] left-[45%] bg-slate-100 px-6 py-2 text-[1.7rem] bg-opacity-90'>
          Boys
        </span>
        <img src='kid1.jpg' alt='kid1' />
      </div>
      <div className='relative'>
        <span className='absolute top-[40%] left-[45%] bg-slate-100 px-6 py-2 text-[1.7rem] bg-opacity-90'>
          Girls
        </span>
        <img src='kid2.jpg' alt='kid2' />
      </div>
      <div className='relative'>
        <span className='absolute top-[40%] bg-slate-100 bg-opacity-90 left-[34%]  px-6 py-2 text-[1.7rem] '>
          New Arrivals
        </span>
        <img src='kid3.jpg' alt='kid3' />
      </div>
    </div>
  );
};

export default BoxContainer;
