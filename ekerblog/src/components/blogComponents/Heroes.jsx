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
      <div className="h-[984px] w-[100%] flex flex-col justify-center items-center bg-[#F4F4F4]">
        <div className="w-[9.25rem] h-[9.25rem] bg-[#D9D9D9] rounded-full z-[999] absolute top-0 mt-[-3.75rem] left-0 ml-[36.5rem]"></div>
        <div className="flex justify-center items-center flex-wrap gap-[5rem] pt-[50px]  ">
          <div className="inline-flex items-center  ml-[60rem]">
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
          <div className="flex flex-col w-[45%] mb-[80px] mr-[40px]">
            <p className="font-inter font40">{t("hi")}</p>
            <p className="font-inter font56 z-[2]">{t("aboutMe")}</p>
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
              Currently <span className="text-customPink">Freelancing</span> for{" "}
              <span className="text-customPink"> UX, UI, & Web Design </span>
              Project. <br />
              Invite me to join your team {"->"}{" "}
              <a className="text-customPink">yunus.eker3594@gmail.com</a>
            </p>
          </div>
          <img
            className="rounded-[2.5rem] w-[450px] h-[450px] z-[2] mb-[140px] img-shadow"
            src="./src/assets/Yunus Eker-CVFOTO (1).jpg"
            alt=""
          />
        </div>
        <div className="w-[180px] h-[78px] bg-[#EA2678] absolute rounded-l-full top-[710px] right-0 z-[9] "></div>
        <div className="w-[200px] h-[42px] bg-[#E92577] rounded-md absolute z-[1] top-[347px] left-[240px]"></div>
        <div className="w-[100%]">
          <div className="w-[161.33px] h-[161.33px] bg-[#D9D9D9] rounded-full ml-[70.3vw] z-[99] absolute flex items-center justify-center bottom-0 mb-[-110.665px]">
            <div className="w-[105.33px] h-[105.33px]">
              <div className="w-[105.33px] h-[52.665px] bg-[#F4F4F4] rounded-t-[52.665px]"></div>
              <div className="w-[105.33px] h-[52.665px] bg-white rounded-b-[52.665px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heroes;
