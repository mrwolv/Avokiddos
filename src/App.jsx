import AppLayout from './layouts/AppLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErroPage from './pages/ErroPage'
import Shop from './pages/Shop'
import 'animate.css'


const App = () => {
    return (
        <div className='h-full'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AppLayout />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/*' element={<ErroPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
