import { Checkbox, Collapse, Slider } from 'antd'
import { useState } from 'react'

const { Panel } = Collapse

const FilterShopping = () => {
    const [inputValue, setInputValue] = useState(0)

    const onChange = newValue => {
        setInputValue(newValue)
    }

    function handleReset () {
        setInputValue(0)
    }

    const text = (
        <>
            <div className='flex flex-col items-start gap-4'>
                <div className='flex items-center'>
                    <Checkbox />
                    <span>Checkbox 1 Text</span>
                </div>

                <div className='flex items-center'>
                    <Checkbox />
                    <span>Checkbox 2 Text</span>
                </div>
                <div className='flex items-center'>
                    <Checkbox />
                    <span>Checkbox 3 Text</span>
                </div>

                <div className='flex items-center'>
                    <Checkbox />
                    <span>Checkbox 4 Text</span>
                </div>
            </div>
        </>
    )
    const items = [
        {
            key: '1',
            label: 'Boy',
            children: text,
        },
    ]
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='mb-4 md:mb-0'>
            <div className='md:hidden'>
                <button className='p-2 bg-yellow-500 outline outline-3 outline-red-600'>
                    Filter
                </button>
            </div>
            <div className='hidden md:flex'>
                <div className='p-2'>
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
                    <div>
                        {/* <Collapse
                            className='mt-4 bg-white'
                            bordered={false}
                            items={items}
                            expandIconPosition='right'
                        /> */}
                        ;
                        <Collapse
                            className='mt-4'
                            bordered={false}
                            expandIconPosition='right'
                        >
                            {items.map(item => (
                                <Panel
                                    header={
                                        <div className='flex gap-4 text-[1.2rem]'>
                                            <Checkbox
                                                style={{ color: 'red' }}
                                            />
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
        </div>
    )
}

export default FilterShopping
