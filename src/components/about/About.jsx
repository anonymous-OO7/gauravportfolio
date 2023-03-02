import React from 'react'
import '../about/about.css';
import ME from '../../assets/me-about.jpg'
import {BsAward , BsFillFolderFill}  from 'react-icons/bs';
import {FaUsers} from  'react-icons/fa';

const About = () => {



  return (

    <section id='about'>

        <div className='headingCtn'>
          <text className='getText'>Get to know</text>
          <text id='aboutme'>About me</text>
        </div>

        <div className='container'>

          <div className='about_container'>
                <div className='about__me-image'>
                    <img src={ME} alt="anbout image"></img>
                </div>


                <div className='about_content'>

                      <div className='about_cards'>

                        <article className='about_card'>
                          <BsAward className='about_icon'/>
                          <h5>Experience</h5>
                          <small>2+ Years working</small>
                        </article>

                        <article className='about_card'>
                          <FaUsers className='about_icon'/>
                          <h5>Clients</h5>
                          <small>200+ worldwide</small>
                        </article>

                        <article className='about_card'>
                          <BsFillFolderFill className='about_icon'/>
                          <h5>Projects</h5>
                          <small>5+ completed</small>
                        </article>

                      </div>

                      <div >
                        <p className='aboutText'></p>
                      </div>


                      <a href='#contact' className='btn btn-primary talkbtn'>Lets Talk</a>

                </div>
            </div>
        </div>

     

    </section>
  )
}

export default About