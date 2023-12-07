/* eslint-disable react/prop-types */
import { Rate } from 'antd'

const Products = ({ products }) => {
    console.log(products)

    return (
        <section className='grid grid-cols-2 gap-6 grid-flow-rows md:grid-cols-3 '>
            {products.map(product => (
                <div
                    key={product.id}
                    className='flex flex-col items-center justify-center'
                >
                    <div className=''>
                        <img
                            src={product.image}
                            alt='kid image'
                            height={200}
                            className='object-contain w-full h-[320px] md:h-[400px] md:w-[300px] border border-gray-300 '
                        />
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-[.8rem] mt-4 text-red-500'>
                            Boys
                        </span>
                        <span className='mt-2 font-lovesunshine'>
                            description
                        </span>
                        <span className='text-[.8rem]'>
                            <Rate allowHalf allowClear />  {product.rating.rate}
                        </span>
                        <span className='mt-2 text-[1.1rem] font-semibold'>
                            &#8377; 2,379
                        </span>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Products
