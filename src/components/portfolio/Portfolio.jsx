import React from "react";
import "../portfolio/portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpeg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";


import FrameworkButton from "../common/framweworkbutton/FrameworkButton";
import Button from "../common/button/Button";
import DetailsCard from "../common/detailscard/DetailsCard";



const Portfolio = () => {



  const hideMiniDes = () => {


  }




  return (


    <section id="portfolio">


      <div className="headingctn">
        <div className="title-ctn">
          <div className="title-subctn">
            <text className="getText">My Work</text>
            <text id="aboutme">Portfolio</text>
          </div>
        </div>
      </div>







      <div className="container portfolio_container">

        <article className="portfolio_item_projects"  >
          <h3 className="project_heading">Tic Tac Toe game</h3>
          {/* card slide */}
          <DetailsCard src={IMG1}  title={"Description"} details={"Tic Tac Toe is a two-player game in which the objective is to take turns and mark the correct spaces in a 3x3 (or larger) grid"} />


          <div className="mini_description">
            <FrameworkButton frameworkname="React Js" />
            <FrameworkButton frameworkname="HTML" />
            <FrameworkButton frameworkname="CSS" />
            <FrameworkButton frameworkname="Javascript" />
            <FrameworkButton frameworkname="Web" />
          </div>



          
         <div style={{  display: "flex", alignItems: "center",position:"absolute" ,bottom:10 }}>

            <Button url={"https://github.com/anonymous-OO7/tictactoe.github.io"}  text="Github" ></Button>
            <Button url={"https://anonymous-oo7.github.io/tictactoe.github.io/"}  text="Live demo" ></Button>

          </div> 

        </article>






        <article className="portfolio_item_projects"  >
          <h3 className="project_heading">Kuants Android and ios application</h3>
          {/* card slide */}
          <DetailsCard src={IMG2}  title={"Description"} details={"Kuants is an algorithmic trading platform that provides all the required tools as well as the infrastructure requirements"} />


          <div className="mini_description">
            <FrameworkButton frameworkname="React Native" />
            <FrameworkButton frameworkname="Javascript" />
            <FrameworkButton frameworkname="Redux" />
            <FrameworkButton frameworkname="Android" />
            <FrameworkButton frameworkname="Google play" />


          </div>
         <div style={{  display: "flex", alignItems: "center",position:"absolute" ,bottom:10 }}>

            <Button url={"https://github.com"}  text="Github" ></Button>
            <Button url={"https://github.com"}  text="Live demo" ></Button>

          </div> 

        </article>
   


        <article className="portfolio_item_projects"  >
          <h3 className="project_heading">To Do list Planner</h3>
          {/* card slide */}
          <DetailsCard src={IMG3}  title={"Description"} details={"The Difference Between a Checklist and a To-do List,A to-do list is an ad-hoc series of tasks that tell you what to do"} />


          <div className="mini_description">
            <FrameworkButton frameworkname="React Js" />
            <FrameworkButton frameworkname="HTML" />
            <FrameworkButton frameworkname="CSS" />
            <FrameworkButton frameworkname="Javascript" />
            <FrameworkButton frameworkname="Web" />
          </div>
         <div style={{  display: "flex", alignItems: "center",position:"absolute" ,bottom:10 }}>

            <Button url={"https://github.com/anonymous-OO7/toDoList.github.io"}  text="Github" ></Button>
            <Button url={"https://anonymous-oo7.github.io/toDoList.github.io/"}  text="Live demo" ></Button>

          </div> 

        </article>




        <article className="portfolio_item_projects"  >
          <h3 className="project_heading">BMI React App</h3>
          {/* card slide */}
          <DetailsCard src={IMG4}  title={"Description"} details={"BMI is a reliable indicator. It is used to screen for weight categories that may lead to health problems."} />


          <div className="mini_description">
            <FrameworkButton frameworkname="React Js" />
            <FrameworkButton frameworkname="HTML" />
            <FrameworkButton frameworkname="CSS" />
            <FrameworkButton frameworkname="Javascript" />
            <FrameworkButton frameworkname="Web" />
          </div>
         <div style={{  display: "flex", alignItems: "center",position:"absolute" ,bottom:10 }}>

            <Button url={"https://github.com/anonymous-OO7/pokemon"}  text="Github" ></Button>
            <Button url={"https://anonymous-oo7.github.io/pokemon/"}  text="Live demo" ></Button>

          </div> 

        </article>


 

        <article className="portfolio_item_projects"  >
          <h3 className="project_heading">Liver Disease Prediction Machine Learning</h3>
          {/* card slide */}
          <DetailsCard src={IMG5}  title={"Description"} details={"Predict liver disease based on a software engineering approach using classification and feature selection technique."} />
          <div className="mini_description">
            <FrameworkButton frameworkname="Dataframe" />
            <FrameworkButton frameworkname="AutoML" />
            <FrameworkButton frameworkname="clustering" />
            <FrameworkButton frameworkname="AUC" />
            <FrameworkButton frameworkname="Activation" />
          </div>
         <div style={{  display: "flex", alignItems: "center",position:"absolute" ,bottom:10 }}>

            <Button url={"https://github.com/anonymous-OO7/Liver-Disease-Prediction-system"}  text="Github" ></Button>
            <Button url={"https://github.com/anonymous-OO7/Liver-Disease-Prediction-system"}  text="Live demo" ></Button>
          </div> 
        </article>
    

        <article className="portfolio_item_projects"  >
          <h3 className="project_heading">Aspect Based Sentiment Analysis</h3>
          {/* card slide */}
          <DetailsCard src={IMG6}  title={"Description"} details={"ABSA is a text analysis technique that categorizes data by aspect and identifies the sentiment attributed to each one. "} />
          <div className="mini_description">
            <FrameworkButton frameworkname="ML" />
            <FrameworkButton frameworkname="Regression" />
            <FrameworkButton frameworkname="Neural" />
            <FrameworkButton frameworkname="Naïvebayes" />
            <FrameworkButton frameworkname="Decisiontree" />
          </div>
         <div style={{  display: "flex", alignItems: "center",position:"absolute" ,bottom:10 }}>

            <Button url={"https://github.com/anonymous-OO7/Sentiment-Analysis"}  text="Github" ></Button>
            <Button url={"https://github.com/anonymous-OO7/Sentiment-Analysis"}  text="Live demo" ></Button>
          </div> 
        </article>
   
    
      </div>


      
    </section>
  );
};

export default Portfolio;
