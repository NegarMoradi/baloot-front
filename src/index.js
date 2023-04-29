import React from 'react';
import './style/index.css';
import './style/details.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './reducer/store';
import { createRoot } from 'react-dom/client';

const program_root =  createRoot(document.getElementById('root'));

program_root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
