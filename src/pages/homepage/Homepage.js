import React from "react";
import { Helmet } from "react-helmet";
import IntroPage from "../../components/intropage/IntroPage";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Services from "../../components/services/Services";
import Portfolio from "../../components/portfolio/Portfolio";
import Awards from "../../components/awards/Awards";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Gaurav Yadav | Home</title>
        <meta
          name="description"
          content="Connect Residuary Pvt Limited is a well-established asset leasing brand in India dealing in all types of IT Assets, Fit-outs, Plant and machinery etc. We have been leased over 2000cr + of assets in past 12 years of operations."
        />
        <meta
          name="keywords"
          content="leasing, rent, asset on rent, laptop on rent, leasing, laptop on lease, Corporate Asset Purchase, IT asset leasing, equipment leasing, Financing, small business financing, equipment financing, vehicle financing, asset management, Leaseback, capital equipment, business loans, commercial loans, equipment rentals, SME, tax benefits of leasing, lease accounting"
        />
        {/* Add any other meta tags as needed */}
      </Helmet>
      <div
        className="w-full bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 63%, rgba(0,212,255,1) 100%)",
        }}
      >
        <IntroPage />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        {/* <Contact/> */}

        <Awards />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
