import i18n from 'i18next'

import { translations } from './languages/'

i18n.init({
    debug: false,
    supportedLngs: ['pt', 'en'],
    defaultNS: 'translations',
    fallbackLng: 'pt',
    ns: ['translations', 'onboarding'],
    react: {
        wait: true,
    },
    resources: translations,
})

export { i18n }
