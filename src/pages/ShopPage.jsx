import { useState } from 'react'
import { useEffect } from 'react'
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

    return (
        <>
            <section className='flex items-center justify-center h-96'>
                <h1>This is Shop Page</h1>
            </section>
        </>
    )
}

export default Shop
