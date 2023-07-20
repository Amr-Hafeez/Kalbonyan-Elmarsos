import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from './App.jsx';
import Product from "./Product.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route index path={'/'} element={<App/>}/>
            <Route path={'/:productId'} element={<Product/>}/>
        </Routes>
    </Router>
)
