import { useState } from 'react'
import { useEffect } from 'react'
import ShopPageHeader from '../components/PageHeaders'
import SortingPage from '../ui/SortingPage'

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
    console.log(resultCount)
    return (
        <>
            <section className=''>
                <ShopPageHeader />
                <SortingPage resultCount={resultCount} />
            </section>
        </>
    )
}

export default Shop
