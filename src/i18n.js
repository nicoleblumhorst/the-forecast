import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './assets/locales/en/translation.json'
import translationES from './assets/locales/es/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "es",
      interpolation: {
        escapeValue: false
      }
    });

export default i18n;
