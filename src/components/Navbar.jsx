import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { GiBasket } from 'react-icons/gi';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';

const Navbar = () => {
  const [isLabelHidden, setIsLabelHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const handleInputChange = e => {
    const inputValue = e.target.value;
    setIsLabelHidden(!!inputValue);
  };

  const onClick = ({ key }) => {
    message.info(`Selected: ${key}`);
  };

  const boysItems = [
    {
      label: 'All Boys',
      key: '1'
    },
    {
      label: 'PlaySuits and Playsets',
      key: '2'
    },
    {
      label: 'Shirts',
      key: '3'
    },
    {
      label: 'Winter Wear',
      key: '4'
    }
  ];

  const girlsItems = [
    {
      label: 'All Girls',
      key: '1'
    },
    {
      label: 'PlaySuits and Playsets',
      key: '2'
    },
    {
      label: 'Dresses',
      key: '3'
    },
    {
      label: 'Winter Wear',
      key: '4'
    }
  ];

  const boysMenu = (
    <Menu
      onClick={onClick}
      className='px-12 border border-gray-300 rounded shadow-lg w-50 hover:text-red-400 '
    >
      {boysItems.map(item => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  const girlsMenu = (
    <Menu
      onClick={onClick}
      className='p-8 border border-gray-300 rounded shadow-lg w-50 hover:text-red-400'
    >
      {girlsItems.map(item => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  const Drawer = () => (
    <div className='relative z-20 h-full bg-red-500 w-[50%] top-0 left-0'>
      <p onClick={prevState => setOpen(!prevState)}>close</p>
      <ul>
        <li>hello</li>
      </ul>
    </div>
  );

  return (
    <>
      <div className='bg-white'></div>
      <div className='relative cursor-pointer md:hidden bottom-20'>
        {/* Hamburger icon for small screens */}
        <div
          className='px-4 text-2xl'
          onClick={prevState => setOpen(!prevState)}
        >
          {open ? <Drawer/> : 'icon'}
        </div>
      </div>

      <section className='flex items-center justify-between px-8 mt-4 overflow-hidden md:flex '>
        <div className='hidden md:px-8 md:gap-20 md:items-center md:flex '>
          <form>
            <div className='relative flex items-center justify-center'>
              <label
                className={`absolute left-4 text-xs  ${
                  isLabelHidden ? 'opacity-0' : 'opacity-100'
                }`}
              >
                Search
              </label>
              <div className='flex items-center '>
                <input
                  type='search'
                  id='search'
                  className='outline-none border-none focus:border-none bg-[#fff3f2] py-2 pl-8 pr-8'
                  onChange={handleInputChange}
                />
                <div className='mb-4 cursor-pointer bg-red'>
                  <FaSearch className='absolute right-2 text-[#419e7d] hover:bg-[#fedacd]' />
                </div>
              </div>
            </div>
          </form>
          <navbar className='md:justify-between md:items-center md:flex '>
            <ul className='flex items-center gap-4 hover:cursor-pointer '>
              <li className='hover:text-red-400'>Home</li>
              <li className='hover:text-red-400'>New Arrivals</li>
              <li className='hover:text-red-400'>Shop All</li>
              <li className=' hover:text-red-400'>
                <Dropdown overlay={boysMenu}>
                  <a onClick={e => e.preventDefault()}>
                    <Space>
                      Boys
                      <DownOutlined className='text-xs' />
                    </Space>
                  </a>
                </Dropdown>
              </li>

              <li className=' hover:text-red-400'>
                <Dropdown overlay={girlsMenu}>
                  <a onClick={e => e.preventDefault()}>
                    <Space>
                      Girls
                      <DownOutlined className='text-xs' />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li className='hover:text-red-400'>About</li>
              <li className='hover:text-red-400'>Contacts</li>
            </ul>
          </navbar>
        </div>
        <div className='relative flex items-center justify-center bottom-[7.4rem] left-[32rem] md:relative md:bottom-0 md:left-0 '>
          <ul className='flex items-center justify-center gap-4 hover:cursor-pointer '>
            <li className='hover:text-red-400'>
              <CiHeart size={20} />
            </li>
            <li className='hover:text-red-400'>
              <IoPersonOutline size={20} />
            </li>
            <li className='hover:text-red-400'>
              <GiBasket size={20} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
