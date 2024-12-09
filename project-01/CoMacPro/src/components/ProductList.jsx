import { Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";

import { ProductCard } from "./ProductCard";
import ProductImg from "../assets/image/product.png";
import { Heading } from "./Heading";
const ProductData = [
  {
    imgSrc: ProductImg,

    title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
    score: 4.2,
    details: {
      brand: "Platform Basket",
      Model: "Spider 15.75 Pro",
      year: "2021",
    },
    price: { day: "S$2000", week: "S$2000", month: "S$7000" },
  },
  {
    imgSrc: ProductImg,

    title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
    score: 4.2,
    details: {
      brand: "Platform Basket",
      Model: "Spider 15.75 Pro",
      year: "2021",
    },
    price: { day: "S$2000", week: "S$2000", month: "S$7000" },
  },
  {
    imgSrc: ProductImg,

    title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
    score: 4.2,
    details: {
      brand: "Platform Basket",
      Model: "Spider 15.75 Pro",
      year: "2021",
    },
    price: { day: "S$2000", week: "S$2000", month: "S$7000" },
  },
  {
    imgSrc: ProductImg,

    title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
    score: 4.2,
    details: {
      brand: "Platform Basket",
      Model: "Spider 15.75 Pro",
      year: "2021",
    },
    price: { day: "S$2000", week: "S$2000", month: "S$7000" },
  },
  {
    imgSrc: ProductImg,
    title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
    score: 4.2,
    details: {
      brand: "Platform Basket",
      Model: "Spider 15.75 Pro",
      year: "2021",
    },
    price: { day: "S$2000", week: "S$2000", month: "S$7000" },
  },
];
export const ProductList = ({ heading }) => {
  return (
    <Container maxWidth="xl">
      <Heading content={heading} />
      <Grid
        container
        spacing={2}
        sx={{ overflowX: "auto", flexWrap: "nowrap" }}
      >
        {ProductData.map((product, index) => (
          <Grid size={12 / 5} sx={{ minWidth: "260px" }}>
            <ProductCard product={product} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
