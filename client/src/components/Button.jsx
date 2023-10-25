import React from "react";

const Button = ({ style, value, background, onClick ,color , bold}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`select-none border-none ${background}  ${bold} text-black rounded-[15px] 
      text-[14px] px-[1rem] py-[0.35rem] w-[7.5rem] whitespace-nowrap duration-300`}
    >
      {value}
    </button>
  );
};

export default Button;
