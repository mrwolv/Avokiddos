/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const ShopPageHeader = ({title,description}) => {
    return (
        <section className='mt-4'>
            <div className='relative'>
                <img
                    src='/kid5.jpg'
                    alt='Kid banner'
                    className='object-cover md:h-[300px] w-full h-[250px]   '
                />
                <div className='absolute inset-0 bg-sky-400 bg-opacity-60'></div>
                <h1
                    className='absolute font-[900] top-[35%] md:top-[30%] left-[37%] md:left-[45%]
                 text-white text-[2.2rem] md:text-[3.3rem] font-Inter  tracking-1  '
                >
                    {title}
                </h1>
                <p className='absolute top-[55%] left-[30%]  md:left-[44%] md:top-[56%]  text-white  flex items-center gap-2 md:gap-3'>
                    <span className="font-Inter ">Home</span>
                    <span className='w-1 h-1 bg-white rounded-full'></span>
                    <span className="font-Inter">{description}</span>
                </p>
            </div>
        </section>
    )
}

export default ShopPageHeader
