import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './layouts/PageLayout'

/* Pages to  show */
import Home from './pages/Home'
import Shop from './pages/ShopPage'
import ErroPage from './pages/ErroPage'

const App = () => {
    return (
        <div className='h-full'>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<PageLayout content={<Home />} />}
                    />
                    <Route
                        path='/shop'
                        element={<PageLayout content={<Shop />} />}
                    />
                    <Route path='/*' element={<ErroPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
