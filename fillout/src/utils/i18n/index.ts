import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLang from '../../resources/en.json';
import jpLang from '../../resources/jp.json';
import i18next from "i18next";

const resources = {
  en: {
    translation: enLang
  },
  jp: {
    translation: jpLang
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: i18next.options.lng,

    interpolation: {
      escapeValue: false
    }
});

export default i18n;