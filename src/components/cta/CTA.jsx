import React from 'react'
import '../cta/cta.css'
import CV from '../../assets/GauravResume.pdf';

const CTA = () => {
  return (
    <div style={{ display:'flex' , gap: '1rem' , justifyContent:'center' }} >

        <div className='buttonCtnHeader' >  <a  href={CV} download className='anchor-text'>Download cv</a>  </div>

        <div  className='buttonCtnHeader' > <a>Lets's Talk</a></div>
        
       

    </div>
  )
}

export default CTA