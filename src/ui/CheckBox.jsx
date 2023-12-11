export const CheckBox = () => (
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
