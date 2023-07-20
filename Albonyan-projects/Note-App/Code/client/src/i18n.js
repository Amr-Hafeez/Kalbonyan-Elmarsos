import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Arabic from './utils/ar.json';
import English from './utils/en.json';

const resources = {
    en: {
        translation: English,
    },
    ar: {
        translation: Arabic
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        interpolation: {
            escapeValue: false
        },
        
    });

export default i18n;