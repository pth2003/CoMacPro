import { Button, Container } from "@mui/material";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { InputWithIcon } from "./InputWithIcon";
import Grid from "@mui/material/Grid2";
export const SellFilter = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ py: 3, boxShadow: 2, borderRadius: "0 0 16px 16px" }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 3 }}>
          <InputWithIcon
            icon={SearchIcon}
            label="Danh Mục"
            placehoder="Bạn cần tìm gì?"
            showDivider="true"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <InputWithIcon
            icon={VerifiedOutlinedIcon}
            label="Tình trạng"
            placehoder="Tất cả tình trạng"
            showDivider="true"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <InputWithIcon
            icon={LocationOnOutlinedIcon}
            label={"Khu vực"}
            placehoder={"Chọn vị trí"}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }} textAlign="end">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFA21A",
              color: "#000",
              borderRadius: "10px",
              padding: "9px 20px",
            }}
          >
            Tìm Kiếm
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
