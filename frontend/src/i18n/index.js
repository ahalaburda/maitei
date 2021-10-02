import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import {eng} from  './en'
import {esp} from  './es'

i18next.use(LanguageDetector);

i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'es',
        debug: true,
    
        interpolation: {
          escapeValue: false,
        },
        // lng: window.location.pathname.substr(1,2) === 'es' ? 'es' : 'en',
        resources: {
            es: {
                translation: esp
            },
            en:{
                translation: eng
            }
        }
})


export default i18next