import { Collapse, Slider } from 'antd'
import { useState } from 'react'

const { Panel } = Collapse

const FilterShopping = () => {
    const [inputValue, setInputValue] = useState(0)
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxClick = () => {
        // Toggle the state of the checkbox when the custom element is clicked
        console.log('first')
        setIsChecked(!isChecked)
    }

    const onChange = newValue => {
        setInputValue(newValue)
    }

    function handleReset () {
        setInputValue(0)
    }
    /* Component to show the girls Item  for filters
     */
    const girlsItem = (
        <>
            <div className='flex flex-col justify-center gap-4 ml-2 text-[.9rem]'>
                <div className='flex items-center gap-2'>
                    <input
                        type='checkbox'
                        className='w-3.5 h-3.5 border-2 border-red-500 appearance-none'
                    />

                    <span>Co-ord sets</span>
                </div>

                <div className='flex items-center gap-2 '>
                    <input
                        type='checkbox'
                        className='w-3.5 h-3.5 border-2 border-red-500 appearance-none'
                    />

                    <span>Dresses</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <input
                        type='checkbox'
                        className='w-3.5 h-3.5 border-2 border-red-500 appearance-none'
                    />

                    <span>Jackets</span>
                </div>

                <div className='flex items-center gap-2'>
                    <input
                        type='checkbox'
                        className='w-3.5 h-3.5 border-2 border-red-500 appearance-none'
                    />

                    <span>Shirts</span>
                </div>
                <div className='flex items-center gap-2'>
                    <input
                        type='checkbox'
                        className='w-3.5 h-3.5 border-2 border-red-500 appearance-none'
                    />

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
                    <input
                        type='checkbox'
                        className='w-3.5 h-3.5 border-2 border-red-500 appearance-none'
                    />

                    <span>Co-ord sets</span>
                </div>

                <div className='flex items-center gap-2 '>
                    <input
                        type='checkbox'
                        className='w-3.5 h-3.5 border-2 border-red-500 appearance-none'
                    />

                    <span>Playsuits and Playsets</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <input
                        type='checkbox'
                        className='w-3.5 h-3.5 border-2 border-red-500 appearance-none'
                    />

                    <span>Shirts</span>
                </div>

                <div className='flex items-center gap-2'>
                    <input
                        type='checkbox'
                        className='w-3.5 h-3.5 border-2 border-red-500 appearance-none'
                    />

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
                <div className='mt-4'>
                    <h2 className='font-barlow  text-[1.5rem]  mb-1.5 text-[#365644] '>
                        Categories
                    </h2>
                    <Collapse bordered={false} expandIconPosition='right' ghost>
                        {items.map(item => (
                            <Panel
                                header={
                                    <div className='flex items-center gap-4 text-[.9rem] '>
                                        <div>
                                            {/* Hidden checkbox */}
                                            <input
                                                type='checkbox'
                                                className={`w-3.5 h-3.5 border-2 border-red-500 appearance-none cursor-pointer`}
                                            />
                                        </div>
                                        <span>{item.label}</span>
                                    </div>
                                }
                                key={item.key}
                            >
                                {item.children}
                            </Panel>
                        ))}
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default FilterShopping
