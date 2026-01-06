import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <FormspreeProvider project="xzdzlnoj">
        <App />
      </FormspreeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
