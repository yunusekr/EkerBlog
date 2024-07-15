import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
function Projectscontext(props) {
  const { item } = props;
  const { t } = useTranslation();
  const darkMode = useSelector((store) => store.darkMode);
  console.log(item.bg);
  return (
    <div className="flex flex-col">
      <div
        style={{ backgroundColor: `${darkMode ? item.bg : item.bg2}` }}
        className="w-[666.67px] h-[890.67px] rounded-[1rem] flex flex-col pt-[3.5rem] pl-[3.5rem] gap-[1.5rem]"
      >
        <h1 className="font-playfair text-[38.67px] font-bold">{item.name}</h1>
        <p className="w-[490.67px] font-inter text-[21.33px]">{item.about}</p>
        <div className="w-[359px] h-[100px] flex flex-wrap gap-2 ">
          {item.used.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] dark:bg-[#525252] h-[42.33px] w-[100.33px] px-2 rounded-[5rem] flex justify-center items-center"
            >
              <p className="m-0 text-[21.33px] font-bold font-playfair">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="text-[26.67px] font-semibold font-inter flex gap-[12rem] ">
          <a
            href={item.link}
            className="hover:cursor-pointer text-inherit no-underline"
            target="_blank"
          >
            {item.goGithub}
          </a>
          <a
            className="hover:cursor-pointer text-inherit no-underline"
            href={item.link2}
            target="_blank"
          >
            {item.goApp}
          </a>
        </div>
      </div>
      <img
        className="w-[470px] h-[294.5px] absolute mt-[588px] ml-[6.1rem]"
        src={item.picture}
        alt=""
      />
      <img
        className="w-[666px] h-[382px] absolute mt-[568px]"
        src="./src/assets/laptop.png"
      />
    </div>
  );
}

export default Projectscontext;
