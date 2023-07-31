import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  }

  return (
    <div>
      <div> MainPage </div>
      <div>
        <h1>{t('welcome')}</h1>
        <p>{t('greeting', { name: 'John' })}</p>
        <div>
          <button onClick={() => { handleLanguageChange("en"); }}>English</button>
          <button onClick={() => { handleLanguageChange("es"); }}>Spanish</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage
