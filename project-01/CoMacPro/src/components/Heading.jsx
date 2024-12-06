import { Typography } from "@mui/material";
import React from "react";

export const Heading = ({ content }) => {
  return (
    <Typography
      variant="h5"
      component="h2"
      sx={{
        fontWeight: "bold",
        py: 3,
        "&::before": {
          content: '""',
          border: "5px solid #FFA21A",
          borderRadius: "10px",
          marginRight: "15px",
        },
      }}
    >
      {content}
    </Typography>
  );
};
