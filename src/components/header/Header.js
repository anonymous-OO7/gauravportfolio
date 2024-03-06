import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
// import { useNavigate } from "react-router-dom";
import HeaderButton from "../common/HeaderButton";
import Button from "react-bootstrap/Button";
import { FaAirFreshener, FaHome } from "react-icons/fa";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  // const navigate = useNavigate();
  let [open, setOpen] = useState(false);

  const [activePage, setActivePage] = useState("home"); // Default active page

  useEffect(() => {
    const handleScroll = () => {
      // When the scroll is higher than 100 viewport height, set `showHeader` to true
      if (window.scrollY > 80) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 inset-x-0 z-30 bg-white transition-transform duration-300 ease-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full h-[60px]  flex  flex-row   justify-between lg:justify-between items-center   ">
        <div className="relative  w-14 m-4 ml-5 ">
          <button>
            <img
              src="https://i.pinimg.com/originals/03/d6/a4/03d6a40f8be9403b3d20949d84bbb1d1.png"
              alt="new"
            />
          </button>
        </div>

        {/* for devices bigger than tablets */}

        {/* <div className=" hidden   flex-wrap items-center text-base justify-center space-x-2  lg:flex lg:mr-10">
          <HeaderButton buttontext="Home" onClick={() => {}} href='#' />
          <HeaderButton buttontext="About" onClick={() => {}}  href='#about' />
          <HeaderButton buttontext="Awards" onClick={() => {}} href='#awards'  />
          <HeaderButton buttontext="Experience" onClick={() => {}}  href='#experience'  />
          <HeaderButton buttontext="Portfolio" onClick={() => {}} href='#portfolio'   />

        </div> */}
        <div
          className={`  overflow-hidden  z-40 lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white  lg:mr-20 left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          <HeaderButton
            buttontext="Home"
            onClick={() => {
              setActivePage("home");
              setOpen(!open);
            }}
            isActive={activePage === "home"}
            href="#"
          />
          <HeaderButton
            buttontext="About"
            onClick={() => {
              setActivePage("about");
              setOpen(!open);
            }}
            href="#about"
            isActive={activePage === "about"}
          />
          <HeaderButton
            buttontext="Awards"
            onClick={() => {
              setActivePage("awards");
              setOpen(!open);
            }}
            href="#awards"
            isActive={activePage === "awards"}
          />
          <HeaderButton
            buttontext="Experience"
            onClick={() => {
              setActivePage("experience");
              setOpen(!open);
            }}
            href="#experience"
            isActive={activePage === "experience"}
          />
          <HeaderButton
            buttontext="Portfolio"
            onClick={() => {
              setActivePage("portfolio");
              setOpen(!open);
            }}
            href="#portfolio"
            isActive={activePage === "portfolio"}
          />
        </div>

        {/* for tablets and mobilephomes */}

        <div
          onClick={() => {
            console.log("TOGGLES HAM");
            setOpen(!open);
          }}
          className=" bg-indigo-800 absolute right-5  cursor-pointer lg:hidden"
        >
          <Hamburger  size={20} toggled={open} />
        </div>
      </div>
    </header>
  );
};

export default Header;
