import React from 'react'
import {FaHome,} from 'react-icons/fa';
import {FcAbout,FcServices} from 'react-icons/fc';
import {GiSoapExperiment} from 'react-icons/gi';
import {AiFillContacts} from 'react-icons/ai';


import '../navbar/navbar.css';
const Navbar = () => {
  return (

        
        <nav>
        <a href='#' ><FaHome/></a>
        <a href='#about' ><FcAbout/></a>
        <a href='#awards' ><GiSoapExperiment/></a>
        <a href='#experience' ><FcServices/></a>
        <a href='#portfolio' ><AiFillContacts/></a>

        
        </nav>

  )
}

export default Navbar