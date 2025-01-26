import './reset.css';
import Layout from './components/Layout/Layout';

import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage';

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
          element={<div>Basket</div>}
        />
      </Routes>
    </Layout>
  );
}

export default App;
