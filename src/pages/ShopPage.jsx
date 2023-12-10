import { useState } from 'react'
import { useEffect } from 'react'
import ShopPageHeader from '../components/ShoppingPage/PageHeaders'
import SortingPage from '../ui/SortingPage'
import FilterShopping from '../components/ShoppingPage/FilterShopping'
import Products from '../components/ShoppingPage/Products'

const Shop = () => {
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 9

    const indexOfLastProduct = currentPage * itemsPerPage
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    )
    const nPages = Math.ceil(products.length / itemsPerPage)


    const handleChangePage = page => {
        setCurrentPage(page)
    }

    useEffect(() => {
        function getProducts () {
            fetch('https://api.escuelajs.co/api/v1/products')
                .then(res => res.json())
                .then(json => setProducts(json))
        }
        getProducts()
    }, [])

    console.log(products)

    const resultCount = products.length

    return (
        <>
            <section className=''>
                <ShopPageHeader />
                <SortingPage resultCount={resultCount} itemsPerPage={itemsPerPage} />
                <div className='flex flex-wrap items-start gap-16 px-24 md:justify-evenly md:flex md:flex-nowrap '>
                    <FilterShopping />
                    <Products 
                    currentProducts={currentProducts}
                    handleChangePage={handleChangePage}
                    itemsPerPage = { itemsPerPage }
                    current = { indexOfFirstProduct }
                   nPages={nPages}

                    />
                </div>
            </section>
        </>
    )
}

export default Shop
