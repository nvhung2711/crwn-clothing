import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { CartProvider } from './contexts/cart.context.jsx';
import { store } from './store/store.js';

import './index.scss';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
          <App/>
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
