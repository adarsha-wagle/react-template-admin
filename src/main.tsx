import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import './index.css';

import App from './App.tsx';
import { store } from './redux/store.ts';

import ThemeProvider from './theme/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
