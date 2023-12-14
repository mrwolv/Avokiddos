/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react'

const ShopContext = createContext()

export function ShopProvider ({ children }) {
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([])
    /* Fetching fake Products Data */
    useEffect(() => {
        function getProducts () {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => setProducts(json))
        }
        getProducts()
    }, [])

    // console.log(products)

    const itemsPerPage = 9
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState()
    const [itemOffset, setItemOffset] = useState(9)
    const resultCount = products.length

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage

        setCurrentItems(products.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(products.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, products])

    // Invoke when user click to request another page.
    const handlePageClick = event => {
        const newOffset = (event.selected * itemsPerPage) % products.length
        setItemOffset(newOffset)
    }



    return (
        <ShopContext.Provider
            value={{
                products,
                setProducts,
                itemsPerPage,
                currentItems,
                setCurrentItems,
                pageCount,
                setPageCount,
                itemOffset,
                setItemOffset,
                resultCount,
                handlePageClick,
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}

export function useShopContext () {
    const context = useContext(ShopContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
