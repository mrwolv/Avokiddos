/* eslint-disable react/prop-types */
import { Divider, Drawer } from 'antd'
import { useState } from 'react'
import { TbMoodBoy } from 'react-icons/tb'
import { CgGirl } from 'react-icons/cg'
import { SiAboutdotme } from 'react-icons/si'
import { FaRegUser } from 'react-icons/fa'

import { AiOutlineMenu } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import {
    HomeOutlined,
    ShopOutlined,
    ContactsOutlined,
    MailOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import { MdFiberNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

const MobileDrawer = ({ handleInputChange, isLabelHidden }) => {
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    function getItem (label, key, icon, children, type, path) {
        return {
            key,
            icon,
            children,
            label,
            type,
            path,
        }
    }
    const items = [
        getItem('Home', 'sub1', <HomeOutlined />, null, null, '/home'),
        getItem(
            'New Arrivals',
            'sub2',
            <MdFiberNew />,
            null,
            null,
            '/new-arrivals'
        ),
        getItem('Shops', 'sub3', <ShopOutlined />, null, null, '/shop'),
        getItem('Boys', 'sub4', <TbMoodBoy />, null, null, '/boys-shop', [
            getItem('All boys', 'sub4-1'),
            getItem('PlaySuits and PlaySets', 'sub4-2'),
            getItem('Shirts', 'sub4-3'),
            getItem('Winter Wear', 'sub4-4'),
        ]),
        getItem('Girls', 'sub5', <CgGirl />, null, null, '/girls-shop', [
            getItem('All Girls', 'sub5-1'),
            getItem('PlaySuits and PlaySets', 'sub5-2'),
            getItem('Dresses', 'sub5-3'),
            getItem('Winter Wear', 'sub5-4'),
        ]),
        getItem('About', 'sub6', <SiAboutdotme />, null, null, '/about'),
        getItem(
            'Contact',
            'sub7',
            <ContactsOutlined />,
            null,
            null,
            '/contact'
        ),
    ]

    const footerItems = [
        getItem('Account', 'sub1', <FaRegUser />),
        getItem('Help Desk', 'sub2', <MailOutlined />),
        getItem('Contact', 'sub3', <ContactsOutlined />),
    ]

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

    const [openKeys, setOpenKeys] = useState([''])
    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys)
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
        }
    }

    return (
        <div className='md:hidden '>
            <AiOutlineMenu onClick={showDrawer} />
            <Drawer
                onClose={onClose}
                open={open}
                style={{
                    width: '260px',
                    position: 'fixed',
                    zIndex: 1,
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
                    <Menu
                        mode='inline'
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        style={{
                            width: 265,
                            marginTop: '1rem',
                            fontSize: '1.1rem',
                        }}
                    >
                        {items.map(item => (
                            <Menu.Item key={item.key} icon={item.icon}>
                                <Link to={item.path} onClick={onClose}>{item.label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </div>
                <Divider />
                <footer className='mt-4 '>
                    <Menu
                        mode='inline'
                        style={{
                            width: 265,
                            fontSize: '1.1rem',
                        }}
                        items={footerItems}
                    />
                </footer>
            </Drawer>
        </div>
    )
}

export default MobileDrawer
