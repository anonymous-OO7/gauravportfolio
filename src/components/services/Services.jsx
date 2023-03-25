import React from "react";
import "../services/services.css";
import { BsCheckAll } from "react-icons/bs";
import {FaReact} from "react-icons/fa"




const Services = () => {
  return (
    <section id="section">
      <div className="headingmainctn">

      <div className='title-ctn' >

      <div className='title-subctn'>

      <text className="getText">What experience I have</text>
        <text id="aboutme">My Experience</text>

      </div>
      </div>
      </div>

      <div className="services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>

            <ul className="service_list">
              <li>
                <BsCheckAll />
                <p className="work-text" >
                 Learned React Js and made websites and games.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text" >
                  Learned HTML, CSS, Javascript and made games and sites using the tech stack.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text" >
                 Made Tic-Tac-Toe game and made it user friendly using the tech stack.
                </p>
              </li>

              <li>
                <BsCheckAll />
                <p className="work-text" >
                 Handled the complete frontend-part of the application Kuants and made it responsive and user friendly.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text" >
                  Made a stone paper scissor game using React Js tech stack.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text" >
                  Built a responsive portfolio using React JS and made it live.
                </p>
              </li>
            </ul>
          </div>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>

            <ul className="service_list">
              <li>
                <BsCheckAll />
                <p className="work-text" >
                 Learned Express Js
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text" >
                Learned NODE and its technical concepts.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text" >
                 Made a project using Express framework which can run a server and handle the requests.
                </p>
              </li>

              <li>
                <BsCheckAll />
                <p className="work-text" >
                  Learned about different CRUD operation and handling in backend.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text" >
                MySql Database concepts and functions.
                </p>
              </li>
              {/* <li>
                <BsCheckAll />
                <p className="work-text" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, ipsam!
                </p>
              </li> */}
            </ul>    
          </div>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>

            <ul className="service_list">
              <li>
                <BsCheckAll />
                <p className="work-text" >
                  React Js Framework
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text" >
                  Made a To-Do List website.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text" >
                  Made Tic-Tac-Toe game using React Js and deployed it.
                </p>
              </li>

              <li>
                <BsCheckAll />
                <p className="work-text" >
                Made Rock-Paper-Scissor game using React Js and deployed it.

                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text" >
                Made Responsive game using React Js and deployed it.

                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text" >
                 Made a portfolio website and hosted it on github.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
