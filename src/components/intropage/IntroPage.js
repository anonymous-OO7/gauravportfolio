import React from "react";
import "../intropage/intro.css";
import CTA from "../cta/CTA";
import ME from "../../assets/codingguy.png";
import CV from "../../assets/GauravResume.pdf";
import Typewriter from "typewriter-effect";
import Lottie from "react-lottie";
import Frontend from "../../lotties/frontendanimation.json";
import { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const IntroPage = () => {
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
              <div className=" flex justify-center items-center ">
                <div className=" w-[80%] ">
                  <div className="mt-10  lg:mt-[10%] xl:mt-[5%]">
                    {/* <h5 id="helloTag">Hi, my name is </h5> */}
                    <h1 id="name">Gaurav Kumar Yadav</h1>
                  </div>

                  <div className="typewriterCtn font-poppins text-xl mt-5 text-indigo-950 flex  justify-end">
                    <Typewriter
                      options={{
                        strings: [
                          "Senior Frontend Developer",
                          "Backend Developer",
                          "Fullstack developer",
                          "Engineering",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                  <div className="flex justify-end">
                    <h5
                      id="profession"
                      className="rounded-lg w-[60%] p-5 bg-red-400 bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out"
                    >
                      I'm a software engineer specializing in building (and
                      occasionally designing) exceptional digital experiences.
                      Currently, I'm focused on building accessible
                      human-centered products at Connect Residuary Private
                      Limited. I most enjoy building software in the sweet spot
                      where design and engineering meet — things that look good
                      but are also built well under the hood.
                    </h5>
                  </div>
                  {/* <CTA /> */}

                  {/* <div className="me bg-amber-600">
                    <img alt="HAHHA" src={ME}></img>
                  </div> */}

                  {/* <div style={{ marginTop: "2rem" }}>
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
                </div> */}
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

        {/* <div className="me">
          <img alt="HAHHA" src={ME}></img>
        </div> */}

        <div id="header-socials"></div>
      </div>
    </div>
  );
};

export default IntroPage;
