import { Navigate, Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';

import Layout from './components/Layout/Layout';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import BasketPage from './pages/BasketPage/BasketPage';
import Catalog from './components/catalog/Catalog/Catalog';
import AccountPage from './pages/AccountPage.jsx/AccountPage';
import ContactInfo from './components/account/ContactInfo/ContactInfo';

Modal.setAppElement('#root');

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path=''
          element={<Navigate to='/catalog' />}
        />

        <Route
          path='catalog'
          element={<Catalog />}
        />

        <Route
          path='about'
          element={<div>About</div>}
        />

        <Route
          path='checkout'
          element={<CheckoutPage />}
        />

        <Route
          path='basket'
          element={<BasketPage />}
        />

        <Route
          path='products/:id'
          element={<ProductDetails />}
        />

        <Route
          path='account'
          element={<AccountPage />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
