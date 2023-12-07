/* eslint-disable react/prop-types */
import { Breadcrumb } from 'antd'

const SortingPage = ({ resultCount }) => {
    return (
        <div className='flex items-center justify-between h-20 p-5 mt-4 bg-slate-100 md:px-16 md:py-8 md:mx-20 md:my-8'>
            <h1 className='text-[.7rem] md:text-[1rem] font-barlow'>
                Showing 1–24 of {resultCount} results
            </h1>
            <div className='flex items-center gap-8 '>
                <Breadcrumb
                    className='hidden md:block  md:text-[1rem] text-[.6rem] '
                    items={[
                        { title: 8 },
                        { title: <a href='#'>12</a> },
                        { title: <a href='#'>18</a> },
                        { title: 24 },
                    ]}
                />

                <select
                    className='ouline outline-1   border-none md:py-2 md:px-3 bg-transparent 
                    text-[.6rem] md:text-[1rem] font-barlow'
                >
                    <option value='volvo' className='font-barlow'>
                        Default Sorting
                    </option>
                    <option value='saab' className='font-barlow'>
                        Sort By Popularity
                    </option>
                    <option value='mercedes' className='font-barlow'>
                        Sort by Lates
                    </option>
                    <option value='audi' className='font-barlow'>
                        Sort By Price : Hight to Low
                    </option>
                    <option value='audi' className='font-barlow'>
                        Sort By Price : Low to High
                    </option>
                </select>
            </div>
        </div>
    )
}

export default SortingPage
