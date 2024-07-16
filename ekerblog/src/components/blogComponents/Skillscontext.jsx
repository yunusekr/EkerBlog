import React from "react";

function Skillscontext(props) {
  const { item, index } = props;
  return (
    <div
      key={index}
      className="flex flex-col items-center gap-3 text-[#777777] dark:text-[#FFFFFF] font-inter text-[32px] max-md:text-[16px]"
    >
      <img
        className="w-[160px] h-[160px] rounded-[8px] max-md:w-[60px] max-md:h-[60px]"
        src={item.img}
      />
      <p>{item.name}</p>
    </div>
  );
}

export default Skillscontext;
