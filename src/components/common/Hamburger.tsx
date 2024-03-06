"use client";

import React, { useEffect, useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

const Hamburgericon = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger
        toggled={isOpen}
        toggle={(toggle) => {
          console.log(toggle, "TOGGLED ----");
        }}
        onToggle={(toggled) => {
          console.log(toggled, "TOGGLED");
          if (toggled) {
            // open a menu

            console.log("opened hamburger");
          } else {
            // close a menu
            console.log("closed hamburger");
          }
        }}
      />
    </div>
  );
};

export default Hamburgericon;
