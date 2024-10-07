import React from "react";
import img from "../../../assets/images/About-Wiggo.jpg";

function HomeAbout() {
  return (
    <div className="container p-4 home-about">
      <div className="row d-flex align-items-stretch h-100">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="mt-1">About Wiggo Automation</h2>
          <p className="mt-4">
            Welcome to Wiggo Automation! Wiggo Automation, a brand of 
            ECOKEEN EQUIPMENTS PRIVATE LIMITED, specializes in high-quality
            cleaning equipment designed for efficient and thorough cleaning. Our
            product range includes scrubber drier machines, sweepers, vacuum 
            cleaners, and more. We serve a variety of industries, including hospitals,
            offices, banquet halls, theaters, industrial facilities, malls, and
            supermarkets.
          </p>
          <p>
            Our mission is to provide top-notch cleaning solutions that ensure a
            clean and healthy environment, making your premises shine with
            cleanliness and hygiene. With Wiggo Automation, you can trust in our
            commitment to excellence and innovation.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={img} className="img-fluid rounded" alt="About Wiggo Automation"/>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
