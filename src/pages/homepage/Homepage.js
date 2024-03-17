import React from "react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import IntroPage from "../../components/intropage/IntroPage";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Services from "../../components/services/Services";
import Portfolio from "../../components/portfolio/Portfolio";
import Awards from "../../components/awards/Awards";
import Education from "../../components/Education";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

const Homepage = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

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
            "linear-gradient(90deg, rgba(24,21,71,1) 26%, rgba(2,1,29,1) 56%, rgba(4,36,62,1) 84%)",
        }}
      >
        <IntroPage />
        <About />
        <Experience />
        <Services />
        <Portfolio openModal={openModal} setOpenModal={setOpenModal} />
        <Education />
        <Awards />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
