import { Container } from "@mui/material";
import React from "react";
import { Heading } from "./Heading";
import { ListItem } from "./ListItem";
const listCategory = [
  "Earth Moving",
  "Lifting Equipment",
  "Aerial Working Platform",
  "Material Handling",
  "Generator & Air Compressor",
  "Compaction Equipment",
  "Concrete Equipment",
  "Site Preparation & Services",
  "Light Equipment & Tools",
  "Technology",
  "Safety Equipment",
  "Vehicle",
  "Others",
];
export const Category = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Heading content="Danh mục thiết bị mới và đã qua sử dụng" />
      <ListItem listCategory={listCategory} />
    </Container>
  );
};
