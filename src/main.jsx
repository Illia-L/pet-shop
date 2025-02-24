import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './index.css'
import App from './App.jsx'

import { HashRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
      {/* <BrowserRouter basename='/pet-shop'>
        <App />
      </BrowserRouter> */}
    </Provider>
  </StrictMode>,
)
