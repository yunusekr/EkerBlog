import React from "react";
import { useSelector } from "react-redux";
import Skillscontext from "./Skillscontext";
import { useTranslation } from "react-i18next";

function Skills() {
  const skills = useSelector((store) => store.skills);
  const { t } = useTranslation();
  return (
    <div className="h-[656px] flex flex-col justify-center items-center gap-16 dark:bg-[#484148]">
      <h1 className="font-inter text-[64px] text-center">{t("skills")}</h1>
      <div className="flex gap-[2.5rem] ">
        {skills.map((item, index) => (
          <Skillscontext key={index} item={item} index={index} />
        ))}
      </div>
      <div className="absolute w-[150px] h-[65px] bg-[#525252] rounded-r-full left-[0] mt-[490px]"></div>
    </div>
  );
}

export default Skills;
