import React from "react";
import Allreviews from "../Allreviews/Allreviews";
import Register from "../Register/Register";
import Services from "../Services/Services";
import Banner from "./../Banner/Banner";
import Contact from "./../Contact/Contact";
import Footer from "./../Footer/Footer";
import Footers from "./../Footers/Footers";
import Review from "./../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Contact></Contact> */}
      <Services></Services>
      {/* <Review></Review> */}
      {<Allreviews></Allreviews>}
      {/* <Footers></Footers> */}
      {<Register></Register>}
      <Footer></Footer>
    </div>
  );
};

export default Home;
