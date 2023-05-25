import React from 'react'
import '../about/about.css';
import ME from '../../assets/me-about.jpg'
import {BsAward , BsFillFolderFill}  from 'react-icons/bs';
import {FaUsers} from  'react-icons/fa';

const About = () => {



  return (

    <section id='about'>

        <div className='heading-ctn'>

          <div className='title-ctn' >

            <div className='title-subctn'>

                <text className='getText'>Get to know</text>
                <text id='aboutme'>About me</text>

            </div>
       

          </div>

      

          <div className='about_cards'>

            <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5 className='topic-name'>Experience</h5>
              <small>2+ Years working</small>
            </article>

            <article className='about_card'>
              <FaUsers className='about_icon'/>
              <h5 className='topic-name'> 10 + Technologies</h5>
              {/* <small style={{ textAlign:"left" }}>10+</small> */}
            </article>

            <article className='about_card'>
              <BsFillFolderFill className='about_icon'/>
              <h5 className='topic-name'>Projects</h5>
              <small className='topic-name'>5+ completed</small>
            </article>

            </div>
        </div>





        <div className='container'>
          <div className='about_container'>
              <div className='about-subctn' style={{}}> 

                   <div className='about__me-image'>
                    <img src={ME} alt="anbout image"></img>
                  </div>
                <p className='aboutText'>
                 My name is Gaurav and I love creating things which live on Internet. My interest in Web development started in 2021,
                  when I created website using HTML , CSS and Javascript. I'm passionate about cutting-edge , pixel-perfect, beautiful interfaces and intutively implemented UX. Experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and within budget.
                </p>
              </div>

                {/* <div className='about_content'> */}

                  

                      {/* <div className='about_cards'>

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

                      </div> */}

                      {/* <a href='#contact' className='btn btn-primary talkbtn'>Lets Talk</a> */}

                {/* </div> */}
            </div>
        </div>



    </section>
  )
}

export default About