import React from "react";
import Point from "../../assets/images/point.svg";

const Points = ({ pointtext  = "Point Text"}) => {
  return (
    <div>
        <div className="flex flex-row  items-center mt-1 mb-2 ">
          <img src={Point} alt="My SVG" className="w-[4%] md:w-[3%] h-auto  mx-2  " />

          <a href="https://www.connectrpl.com/solutions"  className="text-black text-base font-light mx-2 relative">
            {pointtext}
          </a>
      </div>
    </div>
  );
};

export default Points;
