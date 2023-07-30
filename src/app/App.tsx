import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider/ui';
import { classNames } from 'sheared/lib/className';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { useTranslation } from 'react-i18next';


const App = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  const [theme] = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <div>
          <h1>{t('welcome')}</h1>
          <p>{t('greeting', { name: 'John' })}</p>
          <div>
            <button onClick={() => handleLanguageChange('en')}>English</button>
            <button onClick={() => handleLanguageChange('es')}>Spanish</button>
          </div>
        </div>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
