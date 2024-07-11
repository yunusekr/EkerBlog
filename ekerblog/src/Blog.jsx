import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Blog() {
  const { t } = useTranslation();
  console.log(localStorage.getItem("darkMode"));
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) //REDUX İLE YAPPPPP DİĞER COMPONENTLERDE ERİŞŞŞ
  );
  console.log(darkMode);

  console.log(localStorage.getItem("darkMode"));
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language"));
  }, []);
  function deneme() {
    if (i18n.language == "en") {
      i18n.changeLanguage("tr");
      localStorage.setItem("language", "tr");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }
  }

  const changeHandler = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return newDarkMode;
    });
  };

  return (
    <section className="w-full h-full border-1 border-red-500 ">
      <div className="border-1 border-red-500" style={{ height: "61.5rem" }}>
        <div className="border-1 border-red-500 flex items-center">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={changeHandler}
            ></input>
            <span className="slider"></span>
          </label>
          <p className="text-gray-500 font-inter text-xs mb-0 font-bold ml-2 ">
            {darkMode ? t("darkMode2") : t("darkMode")}
          </p>
          <p className="text-gray-500 font-inter text-xs mb-0 font-bold ml-3 ">
            |
          </p>
          <a
            onClick={deneme}
            className="text-gray-500 font-inter text-xs mb-0 font-bold ml-3 languages "
          >
            <span className="language">TÜRKÇE</span> 'YE GEÇ
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
