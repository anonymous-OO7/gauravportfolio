import React from "react";
import '../awards/awards.css';
import IMG1 from "../../assets/certificate1.jpeg";
import IMG2 from "../../assets/certificate2.jpeg";
import Lottie from 'react-lottie';
import  AwardAnimation from '../../lotties/trophie.json';






const Awards = () => {




  return (
    <section id="awards">
      <div className="awardsheadingCtn">

      <div className='title-ctn' >
      <div className='title-subctn'>

      <text className="getText">Proven  to be excellent</text>
        <text id="aboutme">Awards</text>
      </div>
      </div>
      </div>

      <div>
      <Lottie options={{
      loop: true,
      autoplay: true, 
      animationData: AwardAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }}
              height={200}
              width={200}
              />
      </div>

      <div className="container award_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="p1" />
          </div>

          {/* <div className='portfolio_item-image'></div> */}
          <h3>Certificate of appreciation </h3>

          <div style={ { display:"flex" , alignItems:'center' } }>
            <a href="https://github.com" className='awardsbutton'>
              Github
            </a>
          </div>


        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="p1"     />
          </div>

          <h3>Certificate of achievement</h3>
          <div style={ { display:"flex" , alignItems:'center' } }>
            <a href="https://github.com" className='awardsbutton'>
              Github
            </a>

          </div>
        </article>




    
      </div>
    </section>
  );
};

export default Awards;
