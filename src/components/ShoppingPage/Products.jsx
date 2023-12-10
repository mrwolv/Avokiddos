/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Pagination, Rate } from 'antd'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Products = ({
    currentProducts,
    
}) => {
   
    return (
        <section className='grid grid-cols-2 cursor-pointer gap-7 grid-flow-rows md:grid-cols-3'>
            {currentProducts &&
                currentProducts.map(product => (
                    <div
                        key={product.category.id}
                        className='flex flex-col items-center justify-center'
                    >
                        <div className=''>
                            <img
                                src={product.category.image}
                                alt='kid image'
                                height={200}
                                className='object-contain w-full h-[320px] md:h-[400px] md:w-[300px] border border-gray-300 '
                            />
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-[.8rem] mt-4 text-red-500'>
                                {product.category.name}
                            </span>
                            <span className='mt-2 font-lovesunshine'>
                                {product.description}
                            </span>
                            <span className='text-[.8rem]'>
                                <Rate
                                    allowHalf
                                    allowClear
                                    className='text-[.9rem] md:text[1.1rem]'
                                />{' '}
                                {/* {product.rating.rate} */}
                            </span>
                            <span className='mt-2 text-[1.1rem] font-semibold'>
                                &#8377; 2,379
                            </span>
                        </div>
                    </div>
                ))}
            <div className='flex justify-center mt-4'>
                {/* <Pagination defaultCurrent={current} total={nPages} /> */}
            </div>
        </section>
    )
}

export default Products
