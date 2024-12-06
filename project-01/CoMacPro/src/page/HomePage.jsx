import React from "react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Category } from "../components/Category";
import { ProductList } from "../components/ProductList";

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
    </>
  );
};

export default HomePage;
