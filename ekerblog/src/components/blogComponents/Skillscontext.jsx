import React from "react";

function Skillscontext(props) {
  const { item, index } = props;
  return (
    <div
      key={index}
      className="flex flex-col items-center gap-3 text-[#777777] font-inter text-[32px]"
    >
      <img className="w-[160px] h-[160px] rounded-[8px]" src={item.img} />
      <p>{item.name}</p>
    </div>
  );
}

export default Skillscontext;
