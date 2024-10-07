import React from "react";
import Header from "../Components/Home Coomponents/Header/Header";
import Menu from "../Components/Home Coomponents/Menu/Menu";
import Img1 from "../assets/images/Home/Home_banner1.png";
import Img2 from "../assets/images/Home/Home_banner2.jpg";
import HomeAbout from "../Components/Home Coomponents/HomeAbout/HomeAbout";
import HomeCount from "../Components/Home Coomponents/HomeCount/HomeCount";
import Client from "../Components/Home Coomponents/ClientList/Client";
import HomeContact from "../Components/Home Coomponents/HomeContact/HomeContact";
import HomeMap from "../Components/Home Coomponents/Map/HomeMap";
import Testimonial from "../Components/Home Coomponents/Testimonial/Testimonial";
import Footer from "../Components/Home Coomponents/Footer/Footer";
import TabCategoryDetail from "../Components/Home Coomponents/Category Wise Detail/TabCategoryDetail";

function Home() {
  return (
    <>
      <div className="banner-container">
        <div className="overlay">
          <Header />
          <Menu />
        </div>
      </div>
      <HomeAbout />
      <TabCategoryDetail />
      <HomeCount />
      <Client />
      <HomeContact />
      <HomeMap />
      <Testimonial />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
