import React from "react";
import { FaSwatchbook } from "react-icons/fa";

const HeaderButton = ({
  buttontext,
  onClick = () => {},
  isActive = false,
  href = "#",
}) => {
  return (
    <div>
      <button
        className={`
      bg-transparent hover:bg-blue-300  text-black font-poppins font-semibold border-transparent hover:border-b-red-500   border-2
        transition duration-300 ease-in-out transform hover:scale-105
        px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-3 text-xs sm:text-base md:text-base lg:text-sm           ${
          isActive ? "border-b-blue-950" : "hover:border-b-red-500"
        } 

      `}
        onClick={onClick}
      >
        <a href={href} >{buttontext}</a>
      </button>
    </div>
  );
};

export default HeaderButton;
