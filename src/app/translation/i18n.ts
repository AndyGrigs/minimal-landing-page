import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslations },
        es: { translation: esTranslations },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language in case translation for current language is not available
    interpolation: {
        escapeValue: false, // Allows to use HTML in translation strings
    },
});

export default i18n;

