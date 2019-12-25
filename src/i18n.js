import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import tc from "./locales/tc.json";
import jp from "./locales/jp.json";

const resources = {
  en: {
    translation: en,
  },
  tc: {
    translation: tc,
  },
  jp: {
    translation: jp,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tc", //預設語言
  fallbackLng: "tc", //如果當前切換的語言沒有對應的翻譯則使用這個語言，
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
