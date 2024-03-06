import React from 'react'
import Logo1 from "../../assets/images/gorevive.png";


const Gorevive = () => {

    const openInNewTab = (url) => {
        // Use JavaScript's window.open method to open a new tab
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
      };


  return (
    <div>
        
      <div className="w-full mt-36 mb-8">
        <div className="flex-shrink-0  text-[#1e0e62] text-3xl sm:text-4xl text-center font-poppins font-medium leading-[64px] ">
          Our Other Companies
        </div>

        <div className="flex flex-col justify-center items-center  ">
          <button onClick={() => openInNewTab("https://gorevive.in/")}>
            <img src={Logo1} alt="My SVG" className=" w-[18vw]  " />
          </button>

          <div className="flex-shrink-0  text-[#1e0e62] text-xs sm:text-xl text-center font-poppins font-medium leading-[64px] ">
          Dispose your used company Laptops, Desktops, Servers & other IT Equipment's in a hassle free process
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gorevive