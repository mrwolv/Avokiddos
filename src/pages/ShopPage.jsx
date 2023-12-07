import { useState } from 'react'
import { useEffect } from 'react'
import ShopPageHeader from '../components/ShoppingPage/PageHeaders'
import SortingPage from '../ui/SortingPage'
import FilterShopping from '../components/ShoppingPage/FilterShopping'
import Products from '../components/ShoppingPage/Products'

const Shop = () => {
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([])
    useEffect(() => {
        function getProducts () {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => setProducts(json))
        }
        getProducts()
    }, [])

    const resultCount = products.length
    
    return (
        <>
            <section className=''>
                <ShopPageHeader />
                <SortingPage resultCount={resultCount} />
                <div className='flex flex-wrap items-center justify-start p-2 md:justify-around md:flex md:flex-nowrap '>
                    <FilterShopping />
                    <Products  products={products}/>
                </div>
            </section>
        </>
    )
}

export default Shop
