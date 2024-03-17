import React from "react";
import "../services/services.css";
import { BsCheckAll } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { getImageUrl } from "../../utils";
import skills from "../../assets/data/skills.json";
import history from "../../assets/data/history.json";
import styles from "../services/Experience.module.css";

import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;



const Services = () => {
  return (
    <section id="section">
      <Container id="experience">
        <Wrapper>
          <Title>Experience</Title>
          <Desc>
            My work experience as a software engineer and working on different
            companies and projects.
          </Desc>
          <TimelineSection>
            <Timeline>
              {experiences.map((experience, index) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {index !== experiences.length - 1 && (
                      <TimelineConnector style={{ background: "#854CE6" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <ExperienceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineSection>
        </Wrapper>
      </Container>

      {/* <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}

      <div className="services_container mt-6">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>

            <ul className="service_list">
              <li>
                <BsCheckAll />
                <p className="work-text">
                  Learned React Js and made websites and games.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text">
                  Learned HTML, CSS, Javascript and made games and sites using
                  the tech stack.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text">
                  Made Tic-Tac-Toe game and made it user friendly using the tech
                  stack.
                </p>
              </li>

              <li>
                <BsCheckAll />
                <p className="work-text">
                  Handled the complete frontend-part of the application Kuants
                  and made it responsive and user friendly.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text">
                  Made a stone paper scissor game using React Js tech stack.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text">
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
                <p className="work-text">Learned Express Js</p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text">
                  Learned NODE and its technical concepts.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text">
                  Made a project using Express framework which can run a server
                  and handle the requests.
                </p>
              </li>

              <li>
                <BsCheckAll />
                <p className="work-text">
                  Learned about different CRUD operation and handling in
                  backend.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text">
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
                <p className="work-text">React Js Framework</p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text">Made a To-Do List website.</p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text">
                  Made Tic-Tac-Toe game using React Js and deployed it.
                </p>
              </li>

              <li>
                <BsCheckAll />
                <p className="work-text">
                  Made Rock-Paper-Scissor game using React Js and deployed it.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text">
                  Made Responsive game using React Js and deployed it.
                </p>
              </li>
              <li>
                <BsCheckAll />
                <p className="work-text">
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
