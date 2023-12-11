/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import ShopPageHeader from '../components/ShoppingPage/PageHeaders'
import SortingPage from '../ui/SortingPage'
import FilterShopping from '../components/ShoppingPage/FilterShopping'
import Products from '../components/ShoppingPage/Products'

const Shop = () => {
    return (
        <>
            <section className=''>
                <ShopPageHeader title='Shop' description='Shop' />
                <SortingPage />
                <div className='flex flex-wrap gap-12 md:items-start md:px-24 md:justify-evenly md:flex md:flex-nowrap '>
                    <FilterShopping />
                    <Products />
                </div>
            </section>
        </>
    )
}

export default Shop
