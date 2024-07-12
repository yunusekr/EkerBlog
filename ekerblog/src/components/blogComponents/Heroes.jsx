import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { darkModeChange, languageChange } from "../../store/actions";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
function Heroes() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const darkMode = useSelector((store) => store.darkMode);
  const language = useSelector((store) => store.language);
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language"));
  }, []);
  function deneme() {
    if (i18n.language == "en") {
      i18n.changeLanguage("tr");
      localStorage.setItem("language", "tr");
      dispatch(languageChange(localStorage.getItem("language")));
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
      dispatch(languageChange(localStorage.getItem("language")));
    }
  }

  const changeHandler = () => {
    const newDarkMode = !darkMode;
    dispatch(darkModeChange(newDarkMode));
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };
  return (
    <>
      <div className="h-[61.5rem]">
        <div className="h-[58rem] flex flex-col justify-center items-center gap-[5rem] bg-[#F4F4F4]  ">
          <div className="w-[9.25rem] h-[9.25rem] bg-[#D9D9D9] rounded-full z-[999] absolute top-0 mt-[-3.75rem] left-0 ml-[36.5rem]"></div>
          <div className="inline-flex items-center ml-[60rem]">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={changeHandler}
              ></input>
              <span className="slider"></span>
            </label>
            <p className="text-gray-500 font-inter text-[20px] mb-0 font-bold ml-2 ">
              {darkMode ? t("darkMode2") : t("darkMode")}
            </p>
            <p className="text-gray-500 font-inter text-[20px] mb-0 font-bold ml-3 ">
              |
            </p>
            <a
              onClick={deneme}
              className="text-gray-500 font-inter text-[20px] mb-0 font-bold ml-3 languages "
            >
              {language === "tr" ? (
                <>
                  SWITCH TO <span className="text-customPink">ENGLISH</span>
                </>
              ) : (
                <>
                  <span className="text-customPink">TÜRKÇE </span> 'YE GEÇ
                </>
              )}
            </a>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-[5rem] ">
            <div className="flex flex-col w-[45%]">
              <p className="font-inter font40 ">{t("hi")}</p>
              <p className="font-inter font56 ">{t("aboutMe")}</p>
              <div className="flex mt-5">
                <a
                  className="text-inherit"
                  href="https://www.linkedin.com/in/yunus-eker-a49208a5/"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-[40px] hover:cursor-pointer" />
                </a>
                <a
                  className="text-inherit"
                  href="https://github.com/yunusekr"
                  target="_blank"
                >
                  <IoLogoGithub className="text-[40px] ml-4 hover:cursor-pointer" />
                </a>
              </div>
              <p className="mt-[20px] text-[1.5rem] font-inter">
                Currently <span className="text-customPink">Freelancing</span>{" "}
                for{" "}
                <span className="text-customPink"> UX, UI, & Web Design </span>
                Project. <br />
                Invite me to join your team {"->"} pratamaiosi@gmail.com
              </p>
            </div>
            <img
              className="rounded-custom w-[400px] h-[400px] z-[2] mb-[30px]"
              src="./src/assets/Yunus Eker-CVFOTO (1).jpg"
              alt=""
            />
            <div className="w-[400px] h-[400px] rounded-[2rem] bg-[#E92577] absolute ml-[880px] mb-[80px] z-[1] "></div>
          </div>
          <div className="w-[140px] h-[78px] bg-[#EA2678] absolute rounded-l-full top-[710px] right-0 z-[9] "></div>
        </div>
      </div>
    </>
  );
}

export default Heroes;
