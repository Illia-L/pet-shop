import './reset.css';
import Layout from './components/Layout/Layout';

import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import BasketPage from './pages/BasketPage/BasketPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path=''
          element={<CatalogPage />}
        />
        <Route
          path='about'
          element={<div>About</div>}
        />
        <Route
          path='profile'
          element={<div>Profile</div>}
        />
        <Route
          path='checkout'
          element={<div>Checkout</div>}
        />
        <Route
          path='basket'
          element={<BasketPage />}
        />
        <Route
          path='products/:id'
          element={<ProductDetails/>}
        />
      </Routes>
    </Layout>
  );
}

export default App;
