import React from "react";

function Projectscontext(props) {
  const { item } = props;
  return (
    <div className="flex flex-col">
      <div
        style={{ backgroundColor: item.bg }}
        className="w-[666.67px] h-[890.67px] rounded-[1rem] flex flex-col pt-[3.5rem] pl-[3.5rem] gap-[1.5rem]"
      >
        <h1 className="font-playfair text-[38.67px] font-bold">{item.name}</h1>
        <p className="w-[490.67px] font-inter text-[21.33px]">{item.about}</p>
        <div className="w-[359px] h-[100px] flex flex-wrap gap-2 ">
          {item.used.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] h-[42.33px] w-[100.33px] px-2 rounded-[5rem] flex justify-center items-center"
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
            View On Github
          </a>
          <a
            className="hover:cursor-pointer text-inherit no-underline"
            target="_blank"
          >
            Go to App {"->"}
          </a>
        </div>
      </div>
      <img
        className="w-[666px] h-[382px] absolute mt-[568px]"
        src="./src/assets/laptop.png"
      />
      <img src={item.picture} alt="" />
    </div>
  );
}

export default Projectscontext;
