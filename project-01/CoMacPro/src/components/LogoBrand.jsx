import { Box } from "@mui/material";
import React from "react";
import logo1 from "../assets/image/Link → ic-5.png.png";
import logo2 from "../assets/image/Link → ic-6.png.png";
import logo3 from "../assets/image/Link → tech.png.png";
export const LogoBrand = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: "53px 30px",
          backgroundColor: "#F1F1F1",
        }}
      >
        <Box component={"img"} src={logo2}></Box>
        <Box component={"img"} src={logo2}></Box>
        <Box component={"img"} src={logo1}></Box>
        <Box component={"img"} src={logo3}></Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F1F1F1",
          padding: "53px 30px",
        }}
      >
        <Box component={"img"} src={logo2}></Box>
      </Box>
    </>
  );
};
