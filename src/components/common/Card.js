import React from "react";



const Card = ({
  cardtitle,
  content,
  onClick = () => {},
}) => {
  return (
    <div className="flex justify-center ">
      <div className="text-zinc-800 relative mb-4 p-8 bg-white  border-2  rounded-md shadow w-[90%]  ">
        <h2 className="text-black text-[1.63rem] leading-8  font-poppins font-medium mb-4">
          {cardtitle}
        </h2>

        <p className="text-black text-base pb-3  relative text-justify font-poppins">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
