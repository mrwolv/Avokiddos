/* eslint-disable react/prop-types */
import { Drawer } from 'antd';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

const MobileDrawer = ({ handleInputChange, isLabelHidden }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='md:hidden '>
      <AiOutlineMenu onClick={showDrawer} />
      <Drawer
        onClose={onClose}
        open={open}
        style={{
          width: '260px',
          position: 'fixed',
          zIndex: 1
        }}
        placement='left'
        getContainer={false}
        maskClosable={false}
        mask={true}
      >
        <div className='flex flex-col items-center justify-center '>
          <div className=''>
            <img src='/final-logo.png' alt='logo' width={90} />
          </div>
          <form className='mt-8'>
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
          <ul className='flex flex-col gap-5 mt-6 mr-20 capitalize'>
            <li>Home</li>
            <li>New Arrivals</li>
            <li>shop all</li>
            <li> boys </li>
            <li>girls</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
