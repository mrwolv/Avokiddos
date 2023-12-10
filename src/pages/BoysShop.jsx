import ShopPageHeader from '../components/ShoppingPage/PageHeaders'
import SortingPage from '../ui/SortingPage'
import FilterShopping from '../components/ShoppingPage/FilterShopping'
import Products from '../components/ShoppingPage/Products'

const BoysShop = () => {
    return (
        <>
            <section className=''>
                <ShopPageHeader
                title={'Boys'}
                description={'Boys'}
                />
                <SortingPage />
                <div className='flex flex-wrap items-start gap-16 px-24 md:justify-evenly md:flex md:flex-nowrap '>
                    <FilterShopping />
                    <Products />
                </div>
            </section>
        </>
    )
}

export default BoysShop
