import React from "react";
import Card from "../cards/Card";
import Style from "./MainComponents.module.css";
import Title from "../title/Title";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const MainComponents = () => {
  const cardData = [
    {
      id:"1",
      icon: "http://dev.ayasya.de/wp-content/uploads/2021/11/Home-10-icon-img3.png",
      title: "Personal Information",
    },
    {
      id:"2",
      icon: "http://dev.ayasya.de/wp-content/uploads/2021/11/Home-10-icon-img3.png",
      title: "Medical History",
    },
    {
      id:"3",
      icon: "http://dev.ayasya.de/wp-content/uploads/2021/11/Home-10-icon-img3.png",
      title: "Personal Close to My Heart",
    },
    {
      id:"4",
      icon: "http://dev.ayasya.de/wp-content/uploads/2021/11/Home-10-icon-img3.png",
      title: "Ready Reference",
    },
    {
      id:"5",
      icon: "http://dev.ayasya.de/wp-content/uploads/2021/11/Home-10-icon-img3.png",
      title: "Document Details",
    },
    {
      id:"6",
      icon: "http://dev.ayasya.de/wp-content/uploads/2021/11/Home-10-icon-img3.png",
      title: "Insurence - LIC Policy Details",
    },
    {
      id:"7",
      icon: "http://dev.ayasya.de/wp-content/uploads/2021/11/Home-10-icon-img3.png",
      title: "Medi Claim Policy Details",
    },
    {
      id:"8",
      icon: "http://dev.ayasya.de/wp-content/uploads/2021/11/Home-10-icon-img3.png",
      title: "Vehicle Insurance Policy Details",
    },
  ];

  return (
  
    <div className={`container ${Style.main_component}`}>
    <Navbar/>
      <div className={Style.main_title}>
        <Title title="What my family should know" />
      </div>
      <div className="row">
        {cardData.map((card, index) => {
          return (
            <div className="col-lg-3 col-6 mt-4">
              <Card key={index.id} cardTitle={card.title} cardIcon={card.icon} />
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default MainComponents;
