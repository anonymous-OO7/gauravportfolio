import React from "react";
import "../portfolio/portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import ProjectsCard from "./ProjectsCard";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Portfolio = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <section id="portfolio">
      {/* <div className="flex flex-col justify-center items-center">
        <text className="getText">My Work</text>
        <text id="aboutme">My Portfolio</text>
      </div>

      <div className="w-full  flex justify-center items-center">
        <div className=" w-[80%]  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Tic Tac Toe game"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={IMG1}
          />
          <ProjectsCard
            title="Kuants Android and ios application"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={IMG2}
          />
          <ProjectsCard
            title="To Do list Planner"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={IMG3}
          />
          <ProjectsCard
            title="BMI React App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={IMG4}
          />
          <ProjectsCard
            title="Liver Disease Prediction Machine Learning"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={IMG5}
          />
          <ProjectsCard
            title="Aspect Based Sentiment Analysis"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={IMG6}
          />
        </div>
      </div> */}

      <Container id="projects" className="mt-6">
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects. From web apps to android
            apps. Here are some of my projects.
          </Desc>
          <ToggleButtonGroup>
            {toggle === "all" ? (
              <ToggleButton active value="all" onClick={() => setToggle("all")}>
                All
              </ToggleButton>
            ) : (
              <ToggleButton value="all" onClick={() => setToggle("all")}>
                All
              </ToggleButton>
            )}
            <Divider />
            {toggle === "web app" ? (
              <ToggleButton
                active
                value="web app"
                onClick={() => setToggle("web app")}
              >
                WEB APP'S
              </ToggleButton>
            ) : (
              <ToggleButton
                value="web app"
                onClick={() => setToggle("web app")}
              >
                WEB APP'S
              </ToggleButton>
            )}
            <Divider />
            {toggle === "android app" ? (
              <ToggleButton
                active
                value="android app"
                onClick={() => setToggle("android app")}
              >
                ANDROID APP'S
              </ToggleButton>
            ) : (
              <ToggleButton
                value="android app"
                onClick={() => setToggle("android app")}
              >
                ANDROID APP'S
              </ToggleButton>
            )}
            <Divider />
            {toggle === "machine learning" ? (
              <ToggleButton
                active
                value="machine learning"
                onClick={() => setToggle("machine learning")}
              >
                MACHINE LEARNING
              </ToggleButton>
            ) : (
              <ToggleButton
                value="machine learning"
                onClick={() => setToggle("machine learning")}
              >
                MACHINE LEARNING
              </ToggleButton>
            )}
          </ToggleButtonGroup>
          <CardContainer>
            {toggle === "all" &&
              projects.map((project) => (
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            {projects
              .filter((item) => item.category == toggle)
              .map((project) => (
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
    </section>
  );
};

export default Portfolio;
