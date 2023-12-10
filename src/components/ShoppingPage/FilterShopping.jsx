import { Collapse, Slider } from 'antd'
import { useState } from 'react'
import {colors} from '../../constants/constant'
import {sizes} from '../../constants/constant'

const { Panel } = Collapse

const FilterShopping = () => {
    const [inputValue, setInputValue] = useState(0)
    // // const [isChecked, setIsChecked] = useState(false)
    // const [checkedItems, setCheckedItems] = useState({})

    // const handleCheckboxClick = key => {
    //     setCheckedItems(prevCheckedItems => ({
    //         ...prevCheckedItems,
    //         [key]: !prevCheckedItems[key],
    //     }))
    // }

    /* Making a checkbox Compoent for the checkbox */
    const CheckBox = () => (
        <label className='relative flex items-center rounded-md cursor-pointer'>
            <input
                type='checkbox'
                className='relative w-4 h-4 transition-all border-2 border-orange-400 appearance-none cursor-pointer peer bg-orange-900/25 dark:bg-gray-100/25 dark:border-orange-500 checked:border-red-500 checked:bg-red-500'
            />
            <div className='absolute text-white transition-opacity -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none top-1/2 left-1/2 peer-checked:opacity-100'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    stroke='currentColor'
                    strokeWidth='1'
                >
                    <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                    ></path>
                </svg>
            </div>
        </label>
    )

    const onChange = newValue => {
        setInputValue(newValue)
    }

    function handleReset () {
        setInputValue(0)
    }
    /* Component to show the girls Item  for filters */
    const girlsItem = (
        <>
            <div className='flex flex-col justify-center gap-4 ml-2 text-[.9rem]'>
                <div className='flex items-center gap-2'>
                    <CheckBox />

                    <span>Co-ord sets</span>
                </div>

                <div className='flex items-center gap-2 '>
                    <CheckBox />

                    <span>Dresses</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <CheckBox />

                    <span>Jackets</span>
                </div>

                <div className='flex items-center gap-2'>
                    <CheckBox />

                    <span>Shirts</span>
                </div>
                <div className='flex items-center gap-2'>
                    <CheckBox />

                    <span>Winter Wear</span>
                </div>
            </div>
        </>
    )

    /* Component to show the boys item in filter */
    const boysItem = (
        <>
            <div className='flex flex-col justify-center gap-4 ml-2 text-[.9rem]'>
                <div className='flex items-center gap-2'>
                    <CheckBox />
                    <span>Co-ord sets</span>
                </div>

                <div className='flex items-center gap-2 '>
                    <CheckBox />
                    <span>Playsuits and Playsets</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <CheckBox />
                    <span>Shirts</span>
                </div>

                <div className='flex items-center gap-2'>
                    <CheckBox />
                    <span>Winter wear</span>
                </div>
            </div>
        </>
    )

    /* Item arrar to render the components of boys and girls to show for filters */
    const items = [
        {
            key: '1',
            label: 'Boy',
            children: boysItem,
        },
        {
            key: '2',
            label: 'Girls',
            children: girlsItem,
        },
    ]

  
    const Colors = () => (        
    <div className='mt-4'>
            <h2 className=' font-barlow  text-[1.5rem]  mb-1.5 text-[#365644] '>
                Colors
            </h2>
            {colors.map(color => (
                <div className='flex items-center gap-4' key={color.id}>
                    <CheckBox/>
                    {color.name}
                </div>
            ))}
        </div>
    )
    
    const Sizes = () => (        
    <div className='mt-4'>
            <h2 className='font-barlow  text-[1.5rem]  mb-1.5 text-[#365644] '>
                Sizes
            </h2>
            {sizes.map(size => (
                <div className='flex items-center gap-4' key={size.id}>
                    <CheckBox/>
                    {size.name}
                </div>
            ))}
        </div>
    )

    return (
        <div className='mb-4 md:mb-0 '>
            <div className='md:hidden'>
                <button className='p-2 bg-yellow-500 outline outline-3 outline-red-600'>
                    Filter
                </button>
            </div>
            <div className='hidden md:flex md:flex-col md:justify-center '>
                <div className='p-2 '>
                    <h2 className='text-[1.3rem] -tracking-wider uppercase text-gray-400 '>
                        Price Range
                    </h2>
                    <Slider
                        min={0}
                        max={2500}
                        className='w-[200px] mt-4 '
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                    <div className='flex items-center justify-between mt-4'>
                        <span>&#8377;{inputValue} - &#8377; 2500</span>
                        <button
                            className='border-none bg-gray-100 hover:bg-red-500 py-1 px-2.5 '
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
                {/* This is for the boys and girls items to show  */}
                <div className='mt-4'>
                    <h2 className='font-barlow  text-[1.5rem]  mb-1.5 text-[#365644] '>
                        Categories
                    </h2>
                    <Collapse bordered={false} expandIconPosition='right' ghost>
                        {items.map(item => (
                            <Panel
                                header={
                                    <div
                                        className='flex items-center gap-4 text-[.9rem] relative'
                                        key={item.key}
                                    >
                                        {/* <div>
                                          
                                            <input
                                                type='checkbox'
                                                value={item.label}
                                                onChange={() =>
                                                    handleCheckboxClick(
                                                        item.key
                                                    )
                                                }
                                                className={`relative w-3.5 h-3.5 border-2 border-red-500 appearance-none cursor-pointer ${
                                                    checkedItems[item.key]
                                                        ? ''
                                                        : 'bg-red-500 '
                                                }}`}
                                            />
                                        </div> */}
                                        <div className='flex items-center w-full gap-6 '>
                                            <CheckBox />
                                            <span className='hover:text-[#075fcb] text-[1rem]'>
                                                {item.label}
                                            </span>
                                        </div>
                                    </div>
                                }
                                key={item.key}
                            >
                                {item.children}
                            </Panel>
                        ))}
                    </Collapse>
                </div>

                {/* Colors list */}
                <Colors/>
                <Sizes/>
            </div>
        </div>
    )
}

export default FilterShopping
