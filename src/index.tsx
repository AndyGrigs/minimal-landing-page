import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'app/translation/i18n';
const root = createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <I18nextProvider i18n={i18n}>
            <App />
         </I18nextProvider>
         ,
      </BrowserRouter>
   </React.StrictMode>
);
