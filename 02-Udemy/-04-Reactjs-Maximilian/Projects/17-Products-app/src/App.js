import {Route, Routes} from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

const App = props => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<ProductsPage/>} />
                <Route path="/favorites" element={<FavoritesPage/>} />
            </Routes>
        </>
    );
};

export default App;
