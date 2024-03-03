import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/header/Header";
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
      <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Paths />
            {/* <Homepage/> */}
          </div>
      </div>
    </div>
  );
}

export default App;
