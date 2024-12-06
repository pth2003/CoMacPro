import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const CardProductCategory = ({ title, img, index }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
      variant="outlined"
      key={index}
    >
      <CardContent>
        <Typography variant="h5" fontWeight="bold" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardMedia image={img} sx={{ height: "200px", width: "200px", mt: 2 }} />
    </Card>
  );
};
