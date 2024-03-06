import React from "react";



const CardPoints = ({
  cardtitle,
  content =[],
  onClick = () => {},
}) => {
  return (
    <div>
      {/* <div className="text-zinc-800 relative mb-4 p-8 bg-red-400  w-[90%]  ">
        <h2 className="text-black text-[1.63rem] leading-8  font-poppins font-medium mb-4">
          {cardtitle}
        </h2>
      </div> */}

      <div className="text-zinc-800 border-2 border-stone-300 border-solid rounded m-3  bg-red-600/[0.1] bg-white ">
        <h1 className="text-black mt-2 pb-1.5 pl-5 font-poppins font-semibold">{cardtitle}</h1>
        <ul className="relative list-none">

        {content.map((item, index) => (
        <li key={index} className="text-black text-base pl-5 relative list-item mt-2 font-poppins">
          {item}
        </li>
      ))}
         
       
         
        </ul>
      </div>
    </div>
  );
};

export default CardPoints;
