import React from "react";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <div className="w-[1010px] h-[183px] flex justify-center items-center gap-[5.3125rem]">
      <p className="text-right w-[700px] h-[168px] text-[56px] font-medium font-inter z-[2]">
        {t("footerCaption")}
      </p>

      <div className="w-[210px] h-[183px] flex flex-col text-[32px] font-medium font-inter">
        <a
          className=" no-underline text-[#1769FF] dark:text-[#82BBFF]"
          href="https://github.com/yunusekr"
        >
          Github
        </a>
        <a
          className=" text-[#000000] dark:text-[#FFFFFF] no-underline "
          href=""
        >
          Personal Blog
        </a>
        <a
          className=" no-underline text-[#0077B5] dark:text-[#419CCB]"
          href="https://www.linkedin.com/in/yunus-eker-a49208a5/"
        >
          Linkedin
        </a>
        <a className=" no-underline text-[#AF0C48] dark:text-[#EA2678]" href="">
          Email
        </a>
      </div>
      <div className="absolute bg-[#82BBFF] w-[366px] h-[24px] mb-12 mr-[97px] rounded-md z-[1] "></div>
    </div>
  );
}

export default Footer;
