import React from "react";

const Readbutton = ({ buttontext, onClickKnowmore = () => {}, onclickContact = () => {} }) => {
  return (
    <div className=" flex flex-row my-5 py-5 ">
      {/* <button
        onClick={() => {}}
        className={`
      bg-rose-600 hover:bg-black text-black font-light flex row-auto   rounded-xl   transition duration-300 ease-in-out transform hover:scale-105
        px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2 text-sm sm:text-base md:text-lg
      `}
      >
        <p className=" text-fuchsia-50">{buttontext}</p>
      </button> */}

      <button onClick={onClickKnowmore} className="button flex justify-center items-center gap-2.5 p-3 w-40 rounded-lg bg-[#ce000b] text-white font-poppins text-sm leading-6 mr-5">
        Know More
      </button>

      <button onClick={onclickContact} className="flex justify-center items-center gap-2.5 p-3 w-40 rounded-lg border border-black text-black font-poppins text-sm leading-6">
        Contact Us
      </button>
    </div>
  );
};

export default Readbutton;
