import { IoIosArrowDown } from 'react-icons/io';

const NavLinks = () => {
  const links = [
    {name: 'new arrivals'},
    { name: 'shop all' },
    { name: 'boys' ,icons: <IoIosArrowDown />},
    { name: 'girls',icons: <IoIosArrowDown /> },
    { name: 'about' },
    { name: 'contact' }
  ];

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className='flex items-center justify-center gap-2 '>
            <h1 className="hover:text-red-400">{link.name}</h1>
            <span>{link.icons}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
