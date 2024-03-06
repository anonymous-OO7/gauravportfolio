import React from "react";

const ImageCard = ({ title, titledesc, Banner }) => {
  return (
    <div className="shadow-lg " >
      <div className="flex flex-col justify-center items-center p-6">
       
       
        <div className="flex-1 flex justify-center items-center">
          <div className="flex justify-center items-center mt-5">
            <img src={Banner} alt="My SVG" className="w-[80%] h-auto    " />
          </div>
        </div>
        <div className="text-black font-['Poppins'] text-xl font-bold leading-[normal]">
          {title}
        </div>

        <div className=" text-black text-center font-['Poppins'] text-xs font-light leading-[normal]">
          {titledesc}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
