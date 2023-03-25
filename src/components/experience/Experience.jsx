import React from "react";
import "../experience/experience.css";
import { BsFillPatchCheckFill,BsAndroid2,BsApple ,} from "react-icons/bs";
import {FaReact,FaNodeJs,FaGooglePlay ,FaGithub} from "react-icons/fa";
import {SiHtml5,SiCss3,SiJavascript, SiWebflow, SiMysql ,SiTypescript} from "react-icons/si";
import {DiNodejs} from "react-icons/di"
import {ImAndroid} from "react-icons/im"
import {TbBrandNextjs} from 'react-icons/tb';
const Experience = () => {
  return (
    <section id="experience">
      <div className="heading-ctn">

      <div className='title-ctn' >
        <div className='title-subctn'>
        {/* <text className="getText">What skills I have</text> */}
        <text id="aboutme">My Skills</text>
        </div>
        </div>

      </div>

      <div className="experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>

          <div className="experience_content">
            <article className="experience_details">
              <FaReact className="experience_details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiHtml5 className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiCss3 className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <SiJavascript className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <FaReact className="experience_details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiWebflow className="experience_details-icon" />
              <div>
                <h4>Web Development</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <FaGithub className="experience_details-icon" />
              <div>
                <h4>Github</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiTypescript className="experience_details-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <TbBrandNextjs className="experience_details-icon" />
              <div>
                <h4>NextJs</h4>
                <small className="text-light">basic</small>
              </div>
            </article>
          </div>
        </div>











        <div className="experience_backend">
          <h3>Backend Development</h3>

          <div className="experience_content">
            <article className="experience_details">
              <FaNodeJs className="experience_details-icon" />

              <div>
                <h4>Node</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaNodeJs className="experience_details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMysql className="experience_details-icon" />
              <div>
                <h4>My Sql</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <ImAndroid className="experience_details-icon" />
              <div>
                <h4>Android</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <BsApple className="experience_details-icon" />
              <div>
                <h4>ios</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaGooglePlay className="experience_details-icon" />
              <div>
                <h4>Google Play</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
