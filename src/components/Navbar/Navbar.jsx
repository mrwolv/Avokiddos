/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileDrawer from '../MobileNavDrawer/MobileDrawer'
import { FaSearch } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import { LoadingOutlined } from '@ant-design/icons'
import { GiBasket } from 'react-icons/gi'
import { IoPersonOutline, IoChevronDownOutline } from 'react-icons/io5'
import { Dropdown, Menu, Space, Spin } from 'antd'
/* Constant imported */
import { boysItems, girlsItems } from '../../constants/constant'

const Navbar = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const [isLabelHidden, setIsLabelHidden] = useState(false)

    const handleInputChange = e => {
        const value = e.target.value
        setInputValue(value)
        setIsLabelHidden(!!value)

        // Simulate an asynchronous operation (e.g., API call) with a delay
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000) // Adjust the delay as needed

        console.log(value)
    }

    /* Antd Drawer */

    const onClick = ({ key }) => {
        alert(`Selected: ${key}`)
    }

    const boysMenu = (
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
                                        className='outline-none border-none text-[.9rem] focus:border-none bg-[#fff3f2] py-2.5 px-12'
                                        onChange={handleInputChange}
                                        value={inputValue}
                                    />
                                    {isLoading ? (
                                        <Spin
                                            className='absolute text-gray-400 right-4'
                                            indicator={
                                                <LoadingOutlined
                                                    style={{
                                                        fontSize: 24,
                                                    }}
                                                    spin
                                                />
                                            }
                                        />
                                    ) : (
                                        <div className='mb-4 cursor-pointer bg-red'>
                                            <FaSearch className='absolute right-2 text-[#419e7d] hover:bg-[#fedacd]' />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>

                        {/* Navbar Link for navigation */}

                        <div className='md:justify-between md:items-center md:flex '>
                            <ul className='flex items-center gap-4 hover:cursor-pointer text-[1rem]  '>
                                <Link to='/'>
                                    <li className='hover:text-red-400 font-barlow'>
                                        Home
                                    </li>
                                </Link>
                                <li className='hover:text-red-400 font-barlow'>
                                    New Arrivals
                                </li>
                                <Link to='/shop'>
                                    <li className='hover:text-red-400 font-barlow'>
                                        Shop All
                                    </li>
                                </Link>
                                <li className='hover:text-red-400 font-barlow'>
                                    <Dropdown overlay={boysMenu}>
                                        <Space>
                                            <Link
                                                to='/boys-shop'
                                                className='hover:text-red-400 '
                                            >
                                                <span className='text-[1rem]'>
                                                    Boys
                                                </span>
                                            </Link>
                                            <IoChevronDownOutline />
                                        </Space>
                                    </Dropdown>
                                </li>

                                <li className='hover:text-red-400 font-barlow'>
                                    <Dropdown overlay={girlsMenu}>
                                        <Space>
                                            <Link
                                                to='/girls-shop'
                                                className='hover:text-red-400'
                                            >
                                                <span className='text-[1rem]'>
                                                    Girls
                                                </span>
                                            </Link>
                                            <IoChevronDownOutline />
                                        </Space>
                                    </Dropdown>
                                </li>
                                <Link to='/about'>
                                    <li className='hover:text-red-400 font-barlow'>
                                        About
                                    </li>
                                </Link>
                                <Link to='/contact'>
                                    <li className='hover:text-red-400 font-barlow'>
                                        Contact
                                    </li>
                                </Link>
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
