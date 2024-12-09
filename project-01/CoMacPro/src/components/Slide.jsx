import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid2";
import React from "react";
import Excavator from "../assets/image/banner-img.svg";
export const Slide = () => {
  return (
    <Box
      sx={{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#FFD400",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              padding: { xs: 2, md: 5 },
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "calc(0.5em + 1vw)", md: "50px" } }}
            >
              Nền tảng cho thuê B2B <br /> lớn nhất Việt Nam
            </Typography>
            <Typography variant="p" sx={{ fontSize: "calc(0.2em + 0.5vw)" }}>
              Tìm kiếm, so sánh và thuê hàng nghìn thiết bị thuộc <br /> hàng
              trăm danh mục chỉ trong vài cú nhấp chuột
            </Typography>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box
            component="img"
            src={Excavator}
            alt="Excavator"
            sx={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
