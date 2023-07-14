
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
        <ThemeProvider>
        <App/>
        </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);