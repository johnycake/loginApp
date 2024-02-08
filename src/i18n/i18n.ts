import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
//import Backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector'
import translation_en from './translations/en.json'
import translation_sk from './translations/sk.json'

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  //.use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translation: translation_en
      },
      sk: {
        translation: translation_sk
      }
    },

    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false
    }
  })

export default i18n
