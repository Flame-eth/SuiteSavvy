import { useState, useRef } from "react";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import featured from "../../assets/featured.json";
import Carousel from "../../components/carousel/Carousel";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured db={featured} />
        <h1 className="homeTitle">Browse by property type</h1>
        <div>
          <Carousel />
        </div>
        <h1 className="homeTitle">Homes guests loves</h1>
        <FeaturedProperties />
      </div>
      <MailList />
      <div className="homeContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
