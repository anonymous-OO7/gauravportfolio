import React from 'react'
import '../header/header.css';
import CTA from '../cta/CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import CV from '../../assets/GauravResume.pdf';
import Typewriter from 'typewriter-effect';



const Header = () => {


  
  return (


    <div className='mainCtn'>


        <div className='subCtn'>


            <div className='nameCtn'>


                <div className='headingCtn'>
                    <h5 id='helloTag'>Hi, my name is </h5>
                    <text id='name'>Gaurav Kumar Yadav</text>
                    <h5 id='profession'>I'm software engineer specializing in building(and occasionally designing) exceptional digital experiences.
                    Currently I'm focussed on building accessble human-centered products at Kuants Finance Private Limited.
                    </h5>

                </div>
                
                <div className='typewriterCtn'>

                <Typewriter
                    options={{
                      strings: ['Frontend Developer','Backend Developer', 'Fullstack developer'],
                      autoStart: true,
                      loop: true,
                    }}
                  />

                </div>
             
                <CTA/>
            </div>
         
            <div className='me'>
              <img  alt='HAHHA' src ={ME}></img>
            </div>



            <div id='header-socials'>
            <HeaderSocials/>
            </div>
      </div>
    </div>


  )
}

export default Header