import React from "react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Category } from "../components/Category";
import { ProductList } from "../components/ProductList";
import { AboutSection } from "../components/AboutSection";
import { FeedbackSection } from "../components/FeedbackSection";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <ProductList heading={"Máy cẩu"} />
      <ProductList heading={"Máy xúc"} />
      <ProductList heading={"Xe nâng"} />
      <ProductList heading={"Máy phát điện"} />
      <AboutSection />
      <FeedbackSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default HomePage;
