import React from "react";
import "../portfolio/portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";






const Portfolio = () => {




  return (
    <section id="portfolio">

      <div className="headingctn">


      <div className='title-ctn' >

      <div className='title-subctn'>

      <text className="getText">My Work</text>
        <text id="aboutme">Portfolio</text>

      </div>

      </div>
      </div>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="p1" />
          </div>

          {/* <div className='portfolio_item-image'></div> */}
          <h3>Tic Tac Toe game</h3>

          <div style={ { display:"flex" , alignItems:'center' } }>
            <a href="https://github.com/anonymous-OO7/tictactoe.github.io" className='button-ctn'>
              Github
            </a>
            <a href="https://anonymous-oo7.github.io/tictactoe.github.io/" className='button-ctn'>
              Live demo
            </a>
          </div>


        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="p1" />
          </div>

          <h3>Kuants Android and ios application</h3>
          <div style={ { display:"flex" , alignItems:'center' } }>
            <a href="https://github.com" className='button-ctn'>
              Github
            </a>
            <a href="https://github.com" className='button-ctn'>
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="p1" />
          </div>

          <h3>To Do list Planner</h3>
          <div style={ { display:"flex" , alignItems:'center' } }>
            <a href="https://github.com/anonymous-OO7/toDoList.github.io" className='button-ctn'>
              Github
            </a>
            <a href="https://anonymous-oo7.github.io/toDoList.github.io/" className='button-ctn'>
              Live demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="p1" />
          </div>

          <h3>BMI React App</h3>
          <div style={ { display:"flex" , alignItems:'center' } }>
            <a href="https://github.com/anonymous-OO7/pokemon" className='button-ctn'>
              Github
            </a>
            <a href="https://anonymous-oo7.github.io/pokemon/" className='button-ctn'>
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="p1" />
          </div>

          <h3>Liver Disease Prediction Machine Learning</h3>
          <div style={ { display:"flex" , alignItems:'center' } }>
            <a href="https://github.com/anonymous-OO7/Liver-Disease-Prediction-system" className='button-ctn'>
              Github
            </a>
            <a href="https://github.com/anonymous-OO7/Liver-Disease-Prediction-system" className='button-ctn'>
              Live demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="p1" />
          </div>

          <h3>Aspect Based Sentiment Analysis</h3>
          <div style={ { display:"flex" , alignItems:'center' } }>
            <a href="https://github.com/anonymous-OO7/Sentiment-Analysis" className='button-ctn'>
              Github
            </a>
            <a href="https://github.com/anonymous-OO7/Sentiment-Analysis" className='button-ctn'>
              Live demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
