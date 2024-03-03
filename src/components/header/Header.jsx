import React from "react";
import "../header/header.css";
import CTA from "../cta/CTA";
import ME from "../../assets/codingguy.png";
import HeaderSocials from "./HeaderSocials";
import CV from "../../assets/GauravResume.pdf";
import Typewriter from "typewriter-effect";
import Lottie from "react-lottie";
import Frontend from "../../lotties/frontendanimation.json";
import { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const isMobile = window.screen.width < 600;

const Header = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // we use the useEffect hook to listen to the window resize event
  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  }, []);

  return (
    <div className="mainCtn">
      <div className="subCtn">
        <Parallax pages={1.5} style={{ top: "0", left: "0" }} class="animation">
          <ParallaxLayer offset={0} speed={0.25}>
            <div class="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <div class="animation_layer parallax" id="mountain"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-0.1}>
            <div class="animation_layer parallax" id="logoland"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <div class="animation_layer parallax" id="jungle1"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div class="animation_layer parallax" id="jungle2"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
            <div class="animation_layer parallax" id="jungle3"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.45}>
            <div class="animation_layer parallax" id="jungle4"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.4}>
            <div class="animation_layer parallax" id="manonmountain">
              <div className="nameCtn">
                <div className="headingCtn">
                  <h5 id="helloTag">Hi, my name is </h5>
                  <h1 id="name">Gaurav Kumar Yadav</h1>
                  <h5 id="profession">
                    I'm software engineer specializing in building(and
                    occasionally designing) exceptional digital experiences.
                    Currently I'm focussed on building accessble human-centered
                    products at Kuants Finance Private Limited.
                  </h5>
                  {/* <h3 style={{ color: "blue" }}>
              Window Width: {windowSize.width}px
            </h3>
            <h3 style={{ color: "red" }}>
              Window Height: {windowSize.height}px
            </h3> */}
                </div>

                <div className="typewriterCtn">
                  <Typewriter
                    options={{
                      strings: [
                        "Frontend Developer",
                        "Backend Developer",
                        "Fullstack developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>

                <CTA />

                <div style={{ marginTop: "2rem" }}>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: Frontend,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={250}
                    width={250}
                  />
                </div>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div class="animation_layer parallax" id="jungle5"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.25}>
            {/* <Header/> */}
          </ParallaxLayer>
        </Parallax>

        <div className="me">
          <img alt="HAHHA" src={ME}></img>
        </div>

        <div id="header-socials">
          <HeaderSocials />
        </div>
      </div>
    </div>
  );
};

export default Header;
