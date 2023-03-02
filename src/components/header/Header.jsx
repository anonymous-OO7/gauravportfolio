import React from 'react'
import '../header/header.css';
import CTA from '../cta/CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import CV from '../../assets/GauravResume.pdf';



const Header = () => {
  return (


    <div className='mainCtn'>


        <div className='subCtn'>


            <div className='nameCtn'>

              <h5 id='helloTag'>Hello, I'm </h5>
                <text id='name'>Gaurav Kumar Yadav</text>
                <h5 id='profession'>Fullstack developer</h5>
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