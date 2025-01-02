import React from "react";
import Todo from "../components/Todo/Todo";
import { Container } from "@mui/material";
import Header from "../components/Header/Header";

function HomePage() {
  return (
    <Container>
      <Header />
      <Todo />
    </Container>
  );
}

export default HomePage;
