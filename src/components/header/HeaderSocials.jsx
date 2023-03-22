import React from 'react'
import {BsLinkedin,BsGithub,BsPatchCheck} from 'react-icons/bs';







const HeaderSocials = () => {
  return (
    <div style={{  display: 'flex', flexDirection: 'column', alignItems:'center', gap:'0.8rem',position:'absolute' }}>

        <a href='https://www.linkedin.com/in/gaurav-yadav-168b01189/' ><BsLinkedin/></a>

        <a href='https://github.com/anonymous-OO7'><BsGithub/></a>
        <a href='https://github.com/anonymous-OO7'><BsPatchCheck/></a>
    </div>
  )
}

export default HeaderSocials