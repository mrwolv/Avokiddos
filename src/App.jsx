import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './layouts/PageLayout'

/* Pages to  show */
import Home from './pages/Home'
import Shop from './pages/ShopPage'
import ErroPage from './pages/ErroPage'
import BoysShop from './pages/BoysShop'
import GirlsShop from './pages/GirlsShop'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

const App = () => {
    return (
        <div className='h-full'>
             <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout content={<Home />} />} />
                <Route path="/shop" element={<PageLayout content={<Shop />} />} />
                <Route path="/boys-shop" element={<PageLayout content={<BoysShop />} />} />
                <Route path="/girls-shop" element={<PageLayout content={<GirlsShop />} />} />
                <Route path="/about" element={<PageLayout content={<AboutUs />} />} />
                <Route path="/contact" element={<PageLayout content={<ContactUs />} />} />
                <Route path="/*" element={<ErroPage />} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App
