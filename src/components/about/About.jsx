import React from "react";
import "../about/about.css";
import ME from "../../assets/me-about.jpg";
import ME2 from "../../assets/me.JPG";
import { BsAward, BsFillFolderFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col justify-center items-center">
        <text className="getText">Get to know</text>
        <text id="aboutme">About me</text>
      </div>

      <div className="w-full bg-contain bg-center bg-no-repeat lg:bg-cover " style={{backgroundImage:`url(${ME2})`}}>

        <div className="flex flex-col lg:flex-row justify-center items-center">

          {/* <div className="w-full lg:w-1/2  p-4  flex justify-center">
            {/* Content for the first div */}
            {/* <div className="about__me-image">
              <img src={ME} alt="anbout image"></img>
            </div> */}
          {/* </div> */}

          <div className="w-full lg:w-1/2 p-4 mt-16  ">
            {/* Content for the second div */}
            <div className="about_cards ">
              <article className="about_card p-2 flex flex-col justify-center items-center">
                <BsAward className="about_icon" />
                <h5>Experience</h5>
                <small>2+ Years working</small>
              </article>

              <article className="about_card p-2 flex flex-col justify-center items-center">
                <FaUsers className="about_icon" />
                <h5>Applications</h5>
                <small>5+ live</small>
              </article>

              <article className="about_card p-2 flex flex-col justify-center items-center">
                <BsFillFolderFill className="about_icon" />
                <h5>Projects</h5>
                <small>10+ completed</small>
              </article>
            </div>

            <div className="mt-5">
              <div>
              <p className="aboutText ">
                In building JavaScript applications, I'm equipped with just the
                right tools, and can absolutely function independently of them
                to deliver fast, resilient solutions optimized for scale —
                performance and scalabilty are priorities on my radar.
              </p>
            </div>
            </div>
          </div>
          
        </div>
           <a href="#contact" className="btn btn-primary talkbtn ml-10 mt-10 mb-10 lg:ml-48">
              Lets Talk
            </a>
      </div>
    </section>
  );
};

export default About;