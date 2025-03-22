import './reset.css';
import { Route, Routes } from 'react-router-dom';
import Modal from 'react-modal'

import Layout from './components/Layout/Layout';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import BasketPage from './pages/BasketPage/BasketPage';
import Cabinet from './components/cabinet/Cabinet/Cabinet';
import Signup from './components/cabinet/Signup/Signup';
import Login from './components/cabinet/Login/Login';
import ForgotPassword from './components/cabinet/ForgotPassword/ForgotPassword';
import ResetPasswordLogic from './components/cabinet/passwordReset/PasswordResetLogic/PasswordResetLogic';

Modal.setAppElement('#root')

function App() {

  return (
    <Layout>
      <Routes>
        <Route
          path=''
          element={<CatalogPage />}
        />
        <Route
          path='catalog'
          element={<CatalogPage />}
        />
        <Route
          path='about'
          element={<div>About</div>}
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
          element={<ProductDetails />}
        />
        <Route
          path='cabinet'
          element={<Cabinet />}
        >
          <Route
            path='login'
            element={<Login />}
          />
          <Route
            path='logout'
            element={<p>Logout</p>}
          />
          <Route
            path='signup'
            element={<Signup />}
          />
          <Route
            path='forgot-password'
            element={<ForgotPassword />}
          />
          <Route
            path='reset-password'
            element={<ResetPasswordLogic />}
          />
          <Route
            path='orders'
            element={<p>Orders</p>}
          />
          <Route
            path='profile'
            element={<p>Profile</p>}
          />
          <Route
            path='edit-profile'
            element={<p>Edit Profile</p>}
          />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
