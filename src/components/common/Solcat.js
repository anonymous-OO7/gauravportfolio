import React, { useState } from "react";


import CardPoints from './CardPoints'
import Card from "./Card";

const Solcat = () => {

    const [activeTab, setActiveTab] = useState("tab1");
    const items = [
        "Furniture",
        "Fixtures",
        "Air conditioners",
        "HVAC Equipment",
        "Bar Code Reader",
        " Bar Code Equipments",
        "Bill Counters",
        "Cash Registers",
        "Coin Counting Machines",
        "Currency Counters",
        "Currency Counting Machines",
        "Digital Signage",
        "Handheld Laser Scanners",
        "Kiosks",
        "Money Counter Machines",
        "Portable Data Terminals",
        "POS Display and Peripherals",
        "Receipt Printer",
        "Tag Guns",
        "Vending Machine",
      ];
    
      const items2 = [
        "ATM and Related Assets",
        "Currency counting & sorting machines",
        "Counterfeit note detectors",
        "Statement printers",
        "Cash dispensers",
        "Office automation products including document management systems",
        "Archive systems",
        "Packing systems for coins and bank notes",
        "Communication systems - Tele-working solutions",
        "V-SATs",
        "Data networks",
      ];
    
      const techItems = [
        "Computers /Laptops /Desktops",
        "Server hardware and software",
        "Telecommunications equipment",
        "POS equipment",
        "Printers and Paper Shredders",
      ];
    
      const equipmentArray = [
        "Plant and Machinery",
        "Display units",
        "Construction Equipments",
        "Healthcare/Medical Equipments",
        "Transportation Equipments",
        "Warehousing Equipments",
      ];

  return (
    <div>
     {/* Tab Buttons */}
     <div className="flex justify-center space-x-4 mb-4">
        {/* Tab buttons here (as shown above) */}
        <div className="flex justify-center w-[90%] space-x-4 mb-4">
          <button
            className={`px-4 py-2  rounded font-poppins ${
              activeTab === "tab1"
                ? " text-black  border-2 border-b-red-500 bg-gray-200"
                : "bg-white"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Rental Services
          </button>
          <button
            className={`px-4 py-2 rounded font-poppins  ${
              activeTab === "tab2"
                ? " text-black  border-2 border-b-red-500 bg-gray-200"
                : "bg-white"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Value Added Services
          </button>

          <button
            className={`px-4 py-2 rounded font-poppins ${
              activeTab === "tab3"
                ? " text-black  border-2 border-b-red-500 bg-gray-200"
                : "bg-white"
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            Asset Classes we Rent
          </button>
        </div>
      </div>

         {/* Tab Content */}
      <div>
        {/* Tab content sections here (as shown above) */}
        <div>
          {activeTab === "tab1" && (
            <div>
              {/* Content for Tab 1 */}
              <div>
                <Card
                  cardtitle="New Equipment Rental"
                  content="Connect alleviates client’s investment risk by offering customized
          technology refresh options to help ensure that they have ready access
          to the new equipment they need even during their initial rental term.
          New Equipment rental can free up your business  capital, release your
          business from the costs associated with equipment ownership. It’s an
          ideal way to use equipment while you conserve your cash. 
          We also offer programs that enable clients to trade-in or return
          existing equipment, and possibly get cash or credit towards a new
          rental program.
          With flexible options of month-to-month or rent-to-own programs,
          Connect ensures you get the most out of equipment. You only pay for
          the term you use. Renting with Connect is on a consultative approach
          with transparency. Our expert sales engineers will find the best
          solution for your need.
          "
                />

                <Card
                  cardtitle="Sell and Rent Back"
                  content="If client owns equipment, but wants the flexibility and disposition benefits of renting, they can sell owned assets at WDV and rent them back for a mutually agreed term. As a result, client enjoys benefits like an immediate cash infusion from the sale, expedited migration plan to a new solution, safeguard the availability of capital stock, and reduced risk of obsolescence. With this service, client can convert its capital assets to liquid assets."
                />

                <Card
                  cardtitle="Refresh Plan"
                  content="A plan which gives our clients the flexibility to return / upgrade their existing portfolio and refresh their equipment prior to the expiry of the term. This helps our clients to develop a planned procurement strategy with the certainty of operating cash flows, and gives the flexibility to the client to upgrade what they need to and when they need to."
                />

                <Card
                  cardtitle="Short Term Rentals"
                  content="When you have a requirement for something very specific, short term renting is the ideal solution. Short term renting can be very beneficial when the requirement is as short as 1 month to 1 year. Short Term Renting can be used for certain projects which require specific hardware, testing of newly developed software products on different hardware and configurations, as standby equipment until the ordered equipment actually arrives from suppliers, training and conferences, growth in your business or for temporary staff."
                />

                <Card
                  cardtitle="Strategic Tie ups"
                  content="With the growing acceptance for usage of assets on rent, any business entity would require their supplier to provide tailored and competitive rental structure with asset management packages , by reducing the usage of their credit lines and more productive usage of working capital . This can be conveniently accomplished with strategic tie ups with us and utilise our residual management capabilities and systems.

Connect has been a successful strategic tie up partners for large OEM ‘s/ Manufacturers to provide customised rental plans and asset management services on their products vide opportunity-based alliances/ being one of your strategic Partner/ dedicated rental partners.

What Connect Offers :
Enable you to sell your products under customized rental plans
Enable your customer to plan his asset management in a professional manner with options to extend /return/refresh

Our rental solutions allow you to offer a competitive, market-leading solution to your clients, without having to invest in costly additional expertise or processes."
                />
              </div>
            </div>
          )}

          {activeTab === "tab2" && (
            <div>
              {/* Content for Tab 2 */}

              <Card
                cardtitle="Asset Disposable Services"
                content="A service designed to help clients uncover the value of unwanted equipment. With our Asset disposable Services, we manage the retirement of client’s equipment, we do it in a way that can help the client to safeguard their proprietary information, complies with applicable environmental laws and regulations and may even provide you with a financial return on remarketing able equipment."
              />

              <Card
                cardtitle="Strategic & Advisory Services"
                content="This includes consultancy services on Asset Planning, Asset Tracking, Physical Inventory & Asset Audit, Guidance on useful life of assets and Cost Benefit analysis on Rent v/s Buy."
              />
            </div>
          )}

          {activeTab === "tab3" && (
            <div>
              {/* Content for Tab 3 */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <CardPoints cardtitle="RETAIL/OFFICE ASSETS" content={items} />

                <CardPoints
                  cardtitle="ATM and Related Assets"
                  content={items2}
                />

                <CardPoints
                  cardtitle="Information Technology Assets"
                  content={techItems}
                />

                <CardPoints cardtitle="Other Assets" content={equipmentArray} />
              </div>

              <div className="text-zinc-800 py-4 px-8 -m-3.5 mt-4  mb-5">
                <h2 className="text-black font-poppins font-semibold pb-1.5">
                  Cant see the asset that you want on Rent?
                </h2>
                <p className="text-black font-poppins text-base text-justify">
                  As the lists of equipments that we rent is very large, it is
                  impractical to list every item here. Rest assured we rent
                  almost all assets classes. Please get in touch with us for
                  resolution of your query.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Solcat