import { Box, Typography } from "@mui/material";
import React from "react";

function DisconnectPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2">Unable to connect to the Internet</Typography>
      <Typography>
        Google Chorme can't display the webpage because your computer isn't
        connected to the Internet
      </Typography>
    </Box>
  );
}

export default DisconnectPage;
