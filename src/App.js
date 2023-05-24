import './App.css';
import NavBar from './components/NavBar';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Awards from './components/awards/Awards';

import AnimatedCursor from "react-animated-cursor"




function App() {
  return (
    <div>

{/* <AnimatedCursor /> */}
<AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='230, 222, 139'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />

      
      <Header/>
      {/* <About/> */}
      {/* <Navbar/> */}
      {/* <Experience/> */}
      {/* <Services/> */}
      {/* <Portfolio/> */}
      {/* <Contact/> */}

      {/* <Awards/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
