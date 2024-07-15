import React from "react";
import { useTranslation } from "react-i18next";
function Profile() {
  const { t } = useTranslation();
  return (
    <div className="h-[656px] bg-[#F4F4F4] dark:bg-[#2A262B] flex flex-col justify-center items-center gap-4 ">
      <h1 className="font-inter text-[48px] text-center">{t("profile")}</h1>
      <div className="flex items-center gap-[5rem]">
        <div className="w-[42.33rem] h-[26.83rem] bg-[#FFFFFF] dark:bg-[#525252] rounded-[1rem] pt-[2.5rem] pl-[2.5rem] flex flex-col gap-[1rem] box-shadow">
          <p className=" text-[#EA2678] text-[32px] font-playfair ">
            {t("basicInfo")}
          </p>
          <div className="flex gap-5 ">
            <ul className="p-0 font-inter text-[24px] font-semibold flex flex-col gap-3 w-[185px] h-[232px]">
              <li>{t("birthDay")}</li>
              <li>{t("city")}</li>
              <li>{t("education")}</li>
              <li className="mt-[36px]">{t("role")}</li>
            </ul>

            <ul className="p-0 font-inter text-[24px] w-[30%] flex flex-col gap-3 w-[275px] h-[232px]">
              <li>{t("birthDay2")}</li>
              <li>{t("city2")}</li>
              <li>{t("education2")}</li>
              <li>{t("role2")}</li>
            </ul>
          </div>
        </div>

        {/*diğer div*/}
        <div className="absolute w-[120px] h-[24px] rounded-[6px] bg-[#82BBFF] -mt-[360px] ml-[740px] z-[1] "></div>
        <div className="w-[634.67px] z-[2] ">
          <p className=" text-[#000000] dark:text-[#FFFFFF] text-[32px] font-playfair  ">
            {t("aboutMeCaption")}
          </p>
          <div className="font-inter text-[24px] flex flex-col gap-3">
            <p>{t("aboutMeText1")}</p>
            <p>{t("aboutMeText2")}</p>
          </div>
        </div>
      </div>

      <img
        className="right-0 absolute mb-[590px]"
        src="./src/assets/Ellipse 12.png"
        alt=""
      />
    </div>
  );
}

export default Profile;
