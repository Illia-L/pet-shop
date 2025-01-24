import './reset.css'
import Layout from './components/Layout/Layout';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const CatalogPage = lazy (() => import('./pages/CatalogPage/CatalogPage'));

function App() {
  return (
    <Layout>
      {/* <Suspense fallback={<div>Please wait, page is making...</div>}> */}
        <Routes>
          <Route path="/" element={<div>Page</div>}/>
          <Route path="/about" element={<div>About</div>}/>
          <Route path="/catalog" element={<CatalogPage />}/>
          <Route path="/profile" element={<div>Profile</div>}/>
          <Route path="/checkout" element={<div>Checkout</div>}/>
          <Route path="/basket" element={<div>Basket</div>}/>
        </Routes>
      {/* </Suspense> */}
    </Layout>
  )
}

export default App
