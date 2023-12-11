/* eslint-disable react/prop-types */
import { Slider } from 'antd'


const FilterRange = ({onChange,inputValue,handleReset}) => {
  return (
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

  )
}

export default FilterRange