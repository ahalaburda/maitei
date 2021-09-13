import i18next from 'i18next'
import {eng} from  './en'
import {esp} from  './es'

i18next.init({
    interpolation:{
        escapeValue:false
    },
    lng: 'es', //default language
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