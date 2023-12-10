/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useEffect } from 'react'
import ShopPageHeader from '../components/ShoppingPage/PageHeaders'
import SortingPage from '../ui/SortingPage'
import FilterShopping from '../components/ShoppingPage/FilterShopping'
import Products from '../components/ShoppingPage/Products'

const Shop = () => {

 

    return (
        <>
            <section className=''>
                <ShopPageHeader />
                <SortingPage/>
                <div className='flex flex-wrap items-start gap-16 px-24 md:justify-evenly md:flex md:flex-nowrap '>
                    <FilterShopping />
                    <Products/>
                </div>
            </section>
        </>
    )
}

export default Shop
