import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid2";
import React from "react";
import Excavator from "../assets/image/banner-img.svg";
export const Slide = () => {
  return (
    <Box
      sx={{
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: "#FFD400",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          size={5}
          sx={{ px: 7, display: "flex", alignItems: "center", mr: 5 }}
        >
          <Box>
            <Typography variant="h3" component="h3">
              Nền tảng cho thuê B2B <br /> lớn nhất Việt Nam
            </Typography>
            <Typography variant="h5" component="p">
              Tìm kiếm, so sánh và thuê hàng nghìn thiết bị thuộc hàng trăm danh
              mục chỉ trong vài cú nhấp chuột
            </Typography>
          </Box>
        </Grid>
        <Grid size={6} sx={{}}>
          <Box component="img" src={Excavator} alt="Excavator" />
        </Grid>
      </Grid>
    </Box>
  );
};
