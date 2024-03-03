import React from "react";
import "../about/about.css";
import ME from "../../assets/me-about.jpg";
import { BsAward, BsFillFolderFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col justify-center items-center">
        <text className="getText">Get to know</text>
        <text id="aboutme">About me</text>
      </div>

      <div className=" w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2  p-4  flex justify-center">
            {/* Content for the first div */}
            <div className="about__me-image">
              <img src={ME} alt="anbout image"></img>
            </div>{" "}
          </div>
          <div className="w-full lg:w-1/2 p-4">
            {/* Content for the second div */}
            <div className="about_cards">
              <article className="about_card p-2">
                <BsAward className="about_icon" />
                <h5>Experience</h5>
                <small>2+ Years working</small>
              </article>

              <article className="about_card p-2">
                <FaUsers className="about_icon" />
                <h5>Clients</h5>
                <small>200+ worldwide</small>
              </article>

              <article className="about_card p-2">
                <BsFillFolderFill className="about_icon" />
                <h5>Projects</h5>
                <small>5+ completed</small>
              </article>
            </div>

            <div>
              <p className="aboutText"></p>
            </div>
          </div>
          
        </div>
           <a href="#contact" className="btn btn-primary talkbtn ml-10 lg:ml-48">
              Lets Talk
            </a>
      </div>
    </section>
  );
};

export default About;
