import './reset.css';
import Layout from './components/Layout/Layout';

import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import BasketPage from './pages/BasketPage/BasketPage';
import Cabinet from './components/cabinet/Cabinet/Cabinet';
import Signup from './components/cabinet/Signup/Signup';
import Login from './components/cabinet/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from './redux/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchUser());
  }, []);

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
