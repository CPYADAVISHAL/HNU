import React, { useEffect } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from "../locales/en/transaltion.json";
import tHi from "../locales/hi/transaltion.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: tEn,
      },
      hi: {
        translation: tHi,
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const changeLang = (l) => {
  //alert('OK');
  return () => {
    alert("ok " + l);
    //Now change the language
    //object.member();
    i18n.changeLanguage(l);

    //Now set the current language in local storage
    localStorage.setItem("lang", l);
  };
};

export default function Hindi() {
  // My App component is a functional component
  const { t } = useTranslation();

  useEffect(() => {
    //alert('Page is loaded successfully');
    //get the current language stored in the local storage
    let currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
  }, []);
  return (
    <>
      <h1>{t("welcome_to_react")}</h1>
      
      <button onClick={changeLang("en")}>English</button>
      <button onClick={changeLang("hi")}>Hindi</button>
    </>
  );

}
