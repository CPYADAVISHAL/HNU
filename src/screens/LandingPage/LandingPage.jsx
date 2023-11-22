// import Navbar from "./components/hambergermenu/menu";
import "./LandingPage.css";
import { LoremIpsum } from "react-lorem-ipsum";
import React, { useEffect } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from "../../components/locales/en/transaltion.json";
import tHi from "../../components/locales/hi/transaltion.json";
// import Courses from "../components/courses/courses";
import Courses from "../../components/courses/courses";
import College from "../../components/colleges/colleges";
import Navbar from "../../components/navbar/Navbar";
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
 function Hindi() {
  // My App component is a functional component


  useEffect(() => {
    //alert('Page is loaded successfully');
    //get the current language stored in the local storage
    let currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
  }, [])
};
const HomePage = () => {
  const { t } = useTranslation();
  return (

    <div className="root">
      <div className="part1">
        <Navbar /> 
       
      <button onClick={changeLang("en")}>English</button>
      <button onClick={changeLang("hi")}>Hindi</button>

        <div className="lp_content">Best University in Purvanchal</div>
        <div className="lp_content_2">
          {/* <LoremIpsum p={1} avgSentencesPerParagraph={1} /> */}
          "Empowering Minds, Shaping Futures: Your Journey Starts Here."
        </div>
        <div className="lp_courses">Top Courses</div>
        <div>
        <h1>{t("welcome_to_react")}</h1>
        <Hindi /> 
          <Courses />
        </div>
        <div className="lp_data">
          <div className="lp_teacher"> 5+ Colleges</div>
          <div className="lp_teacher"> 50+ Courses</div>
          <div className="lp_teacher"> 500+ Instructors</div>
          <div className="lp_teacher"> 5000+ Students</div>
        </div>
      </div>
      <div className="part2">
        <div>
          {/* <College /> */}
          <College />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
