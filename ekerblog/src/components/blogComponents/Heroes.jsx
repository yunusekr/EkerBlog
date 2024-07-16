import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { darkModeChange } from "../../store/actions";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
function Heroes() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const darkMode = useSelector((store) => store.darkMode);

  const { i18n } = useTranslation();

  function switchLanguage() {
    if (i18n.language == "en") {
      i18n.changeLanguage("tr");
    } else {
      i18n.changeLanguage("en");
    }
  }

  const changeHandler = () => {
    const newDarkMode = !darkMode;
    dispatch(darkModeChange(newDarkMode));
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };
  return (
    <>
      <div className="h-[984px] w-[100%] flex flex-col justify-center items-center bg-[#F4F4F4] dark:bg-[#2A262B] max-md:justify-start  ">
        <div
          className={
            "w-[9.25rem] h-[9.25rem] bg-[#D9D9D9] dark:bg-[#525252] rounded-full z-[999] absolute top-0 mt-[-3.75rem] left-0 ml-[36.5rem] max-md:hidden"
          }
        ></div>
        <div className="flex justify-center items-center flex-wrap gap-[5rem] pt-[50px] max-md:flex max-md:flex-col max-md:gap-[1rem] max-md:pt-10">
          <div className="inline-flex items-center ml-[60rem] max-md:ml-[0rem] mt-[1rem] ">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={changeHandler}
              ></input>
              <span className="slider"></span>
            </label>
            <p className="text-[#777777] dark:text-[#FFFFFF]  font-inter text-[20px] mb-0 font-bold ml-2 max-md:text-[12px] ">
              {darkMode ? t("darkMode") : t("darkMode2")}
            </p>
            <p className="text-[#777777] font-inter text-[20px] mb-0 font-bold ml-3 max-md:text-[12px]">
              |
            </p>
            <a
              onClick={switchLanguage}
              className="text-[#777777] font-inter text-[20px] mb-0 font-bold ml-3 languages max-md:text-[12px]"
            >
              {localStorage.getItem("i18nextLng") === "tr" ? (
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
          <div className="flex flex-col w-[45%] mb-[80px] mr-[40px] max-md:w-[80%] max-md:mr-[0px] max-md:mt-[22rem]">
            <p className="font-inter text-[40px] max-md:text-[20px] max-md:text-center">
              {t("hi")}
            </p>
            <p className="font-inter text-[56px] max-md:text-[25px] z-[2] max-md:text-center">
              {t("aboutMe")}
            </p>
            <div className="flex mt-5 max-md:flex max-md:justify-center ">
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
            <p className="mt-[20px] text-[1.5rem] font-inter max-md:text-center">
              Currently <span className="text-customPink">Freelancing</span> for{" "}
              <span className="text-customPink"> UX, UI, & Web Design </span>
              Project. <br />
              Invite me to join your team {"->"}{" "}
              <a className="text-customPink">yunus.eker3594@gmail.com</a>
            </p>
          </div>
          <img
            className="rounded-[2.5rem] w-[23.68vw] h-[23.68vw] z-[2] mb-[140px] img-shadow max-md:absolute max-md:mt-[-22rem]  max-md:w-[60vw] max-md:h-[60vw]"
            src="./src/assets/Yunus Eker-CVFOTO (1).jpg"
            alt=""
          />
        </div>
        <div className="w-[180px] h-[78px] bg-[#EA2678] absolute rounded-l-full top-[750px] right-0 z-[9] max-md:hidden "></div>
        <div className="w-[200px] h-[42px] bg-[#E92577] rounded-md absolute z-[1] top-[355px] left-[250px] max-md:hidden"></div>
        <div className="w-[161.33px] h-[161.33px] border-[1.5rem] border-[#D9D9D9] dark:border-[#525252] rounded-full ml-[47vw] z-[99] absolute flex items-center justify-center bottom-0 mb-[-105px] max-md:hidden"></div>
      </div>
    </>
  );
}

export default Heroes;
