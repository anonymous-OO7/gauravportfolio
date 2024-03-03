import React from "react";
import "../experience/experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <div className="flex flex-col justify-center items-center">
        <text className="getText">What skills I have</text>
        <text id="aboutme">My Skills</text>
      </div>

      <div className="experience_container ">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>

          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Web Development</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>

          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />

              <div>
                <h4>Node</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>My Sql</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Android</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>ios</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
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
