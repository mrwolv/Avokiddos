import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'animate.css'
import { ShopProvider } from './contexts/useShopContext.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import './tailwind.output.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ShopProvider>
            <App />
        </ShopProvider>
    </React.StrictMode>
)
