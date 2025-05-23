import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/reset.css';
import './css/index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { refreshUser } from './redux/userSlice.js';

store.dispatch((refreshUser()))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
