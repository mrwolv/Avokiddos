import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import { IoPersonOutline } from 'react-icons/io5'
import { GiBasket } from 'react-icons/gi'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd'
import MobileDrawer from '../MobileDrawer/MobileDrawer'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [isLabelHidden, setIsLabelHidden] = useState(false)

    const handleInputChange = e => {
        const inputValue = e.target.value
        setIsLabelHidden(!!inputValue)
    }

    /* Antd Drawer */

    const onClick = ({ key }) => {
        alert(`Selected: ${key}`)
    }

    const boysItems = [
        { label: 'All Boys', key: '1' },
        { label: 'PlaySuits and Playsets', key: '2' },
        { label: 'Shirts', key: '3' },
        { label: 'Winter Wear', key: '4' },
    ]

    const girlsItems = [
        { label: 'All Girls', key: '1' },
        { label: 'PlaySuits and Playsets', key: '2' },
        { label: 'Dresses', key: '3' },
        { label: 'Winter Wear', key: '4' },
    ]

    /*boys menu to fetch the boys dropdown */ const boysMenu = (
        <Menu
            onClick={onClick}
            className='px-12 border border-gray-300 rounded shadow-lg w-50 hover:text-red-400 '
        >
            {boysItems.map(item => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
        </Menu>
    )
    /* Girls menu to fetch the girls dropdown */
    const girlsMenu = (
        <Menu
            onClick={onClick}
            className='p-8 border border-gray-300 rounded shadow-lg w-50 hover:text-red-400'
        >
            {girlsItems.map(item => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
        </Menu>
    )

    return (
        <>
            <navbar className='flex items-center justify-between gap-8 px-4 md:flex-col md:px-0 '>
                <MobileDrawer
                    handleInputChange={handleInputChange}
                    isLabelHidden={isLabelHidden}
                />

                {/* Desktop  */}

               
                <div className='ml-10'>
                    <img
                        src='/final-logo.png'
                        alt='Logo'
                        className='w-[75px] md:w-[150px]'
                    />
                </div>
                <div className='flex items-center gap-[17rem]'>
                    <div className='hidden md:px-8 md:gap-20 md:items-center md:flex '>
                        <form>
                            <div className='relative flex items-center justify-center'>
                                <label
                                    className={`absolute left-4 text-xs  ${
                                        isLabelHidden
                                            ? 'opacity-0'
                                            : 'opacity-100'
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
                        <div className='md:justify-between md:items-center md:flex '>
                            <ul className='flex items-center gap-4 hover:cursor-pointer '>
                                <Link to='/'>
                                    <li className='hover:text-red-400'>Home</li>
                                </Link>
                                <li className='hover:text-red-400'>
                                    New Arrivals
                                </li>
                                <Link to='/shop'>
                                    <li className='hover:text-red-400'>
                                        Shop All
                                    </li>
                                </Link>
                                <li className='hover:text-red-400'>
                                    <Dropdown overlay={boysMenu}>
                                        <a onClick={e => e.preventDefault()}>
                                            <Space>
                                                Boys
                                                <DownOutlined className='text-xs' />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </li>

                                <li className='hover:text-red-400'>
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
                        </div>
                    </div>
                    <div className='md:flex md:items-center md:justify-center'>
                        <ul className='flex gap-4 md:justify-center md:items-center'>
                            <li className='cursor-pointer hover:text-red-400'>
                                <CiHeart size={20} />
                            </li>

                            <li className='cursor-pointer hover:text-red-400'>
                                <IoPersonOutline size={20} />
                            </li>

                            <li className='cursor-pointer hover:text-red-400'>
                                <GiBasket size={20} />
                            </li>
                        </ul>
                    </div>
                </div>
            </navbar>
        </>
    )
}

export default Navbar
