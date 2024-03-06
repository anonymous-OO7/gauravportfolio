import "./App.css";
import NavBar from "./components/NavBar";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Awards from "./components/awards/Awards";
import Paths from "./router";
import Homepage from "./pages/homepage/Homepage";
import AnimatedCursor from "react-animated-cursor";
import Header from "./components/header/Header";

function App() {
  return (
    // <div>
    //   <Header/>
    //   <About/>
    //   <Navbar/>
    //   <Experience/>
    //   <Services/>
    //   <Portfolio/>
    //   {/* <Contact/> */}

    //   <Awards/>
    //   <Footer/>
    // </div>

    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="230, 222, 139"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-grow">
          {/* <Paths /> */}
          <Homepage />
        </div>
      </div>
    </div>
  );
}

export default App;
