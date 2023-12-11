/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Rate } from 'antd'
import ReactPaginate from 'react-paginate'
import { useShopContext } from '../../contexts/useShopContext'
import { Link } from 'react-router-dom'

const Products = () => {
    /* Providing data from context */
    const { currentItems, handlePageClick, pageCount } = useShopContext()
    console.log(currentItems)

    return (
        <main className=''>
            <section className='grid items-start grid-flow-row grid-cols-2 gap-4 md:pr-0 md:px-0 md:grid-cols-3'>
                {currentItems.map(product => (
                    <div
                        key={product.id}
                        className='flex flex-col items-center justify-center '
                    >
                        <Link    
                         to={`/product/${product.title}`}>
                            <div className='' key={product.category.id}>
                                <img
                                    src={product.category.image}
                                    alt='kid image'
                                    height={200}
                                    className='object-cover w-full h-[320px] md:h-[400px] md:w-[300px] border border-gray-300 '
                                />
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-[.8rem] mt-4 text-red-500'>
                                    {product.category.name}
                                </span>
                                <span className='mt-2 font-lovesunshine text-[.7rem] md:text-[1.2rem]'>
                                    {product.title}
                                </span>
                                <span className='text-[.8rem] '>
                                    <Rate
                                        allowHalf
                                        allowClear
                                        className='text-[.9rem] md:text[1.1rem] mt-2
                                    '
                                    />{' '}
                                    {/* {product.rating.rate} */}
                                </span>
                                <span className='mt-2 text-[1.1rem] font-semibold'>
                                    &#8377; 2,379
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
            {/* Pagination  */}
            <div className='flex items-start justify-center gap-3 mt-8 md:p-2 mb-7 '>
                <ReactPaginate
                    className='flex items-center justify-center gap-0 md:gap-4'
                    breakLabel='...'
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    pageRangeDisplayed={8}
                    //    breakAriaLabels='Jump Forward'
                    renderOnZeroPageCount={null}
                    containerClassName='pagination'
                    pageLinkClassName='page-num rounded-full border hover:border-gray-500 w-3 h-3 px-3.5 py-2 hover:bg-gray-200 hover:text-black'
                    activeLinkClassName='active rounded-full border hover:border-gray-500 w-3 h-3 px-3.5 py-2 hover:bg-gray-200 hover:text-black '
                    pageClassName='page-item '
                    nextLabel='>'
                    previousLabel='<'
                    previousLinkClassName='page-num rounded-full border hover:border-gray-500 w-3 h-3 px-3.5 py-2 hover:bg-gray-200 hover:text-black'
                    nextLinkClassName='page-num rounded-full border hover:border-gray-500 w-3 h-3 px-3.5 py-2 hover:bg-gray-200 hover:text-black'
                />
            </div>
        </main>
    )
}

export default Products
