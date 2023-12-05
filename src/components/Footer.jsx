const Footer = () => {
  return (
    <>
      <footer className='w-full grid gap-4  text-[#575858] md:grid-flow-col   '>
        <div className='bg-[#f7c06e] p-8 md:p-24  flex flex-col gap-8 md:flex-row md:gap-20'>
          <div>
            <img src='/public/final-logo.png' alt='Logo' width={135} />
          </div>
          <div className=''>
            <h2 className='text-[1.1rem] font-semibold uppercase'>help link</h2>
            <ul className='flex flex-col gap-2 mt-3 capitalize'>
              <li className='hover:text-white hover:cursor-pointer'>
                Return and refund
              </li>
              <li className='hover:text-white hover:cursor-pointer'>
                Terms & conditions
              </li>
              <li className='hover:text-white hover:cursor-pointer'>
                Privacy & policy
              </li>
            </ul>
          </div>
          <div className='mb-6 '>
            <h2 className='text-[1.1rem] font-semibold uppercase'>about us</h2>
            <ul className='mt-3'>
              <li className='capitalize hover:text-white hover:cursor-pointer'>
                Our story
              </li>
            </ul>
          </div>
        </div>
        <div className='p-8 capitalize bg-white md:p-16 text-[#0b315f] '>
          <h2 className='text-[1.1rem] font-semibold uppercase'>contact</h2>
          <ul className='flex flex-col gap-3 mt-6 hover:cursor-text'>
            <li>+91 9129183929</li>
            <li>helpdesk@avokiddos.in</li>
            <li>Mon - Sat, 10:00 am - 6.30 pm</li>
            <li className='select-none'>whatsapp number</li>
          </ul>
        </div>
      </footer>
      <div
        className='bg-[#EF564C] flex flex-col text-white items-center gap-2 
      md:flex-row md:justify-between md:px-4 cursor-pointer md:h-10 '
      >
        <p>All Rights Reserved.©Avokiddos</p>
        <p>Powered By Thor Solutions</p>
      </div>
    </>
  );
};

export default Footer;
