import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SellFilter } from "./SellFilter";
import { Button, styled, Typography } from "@mui/material";

const CustomTab = styled(Tab)({
  backgroundColor: "#fff",
  color: "#000",
  textTransform: "none",
  padding: "9px 20px",
  "& .MuiTabs-indicator": { backgroundColor: "#004d40" },
  "&.Mui-selected": {
    backgroundColor: "#FFA21A",
    fontWeight: "bold",
    color: "#000",
  },
  "&.MuiTabs-indicator": { position: "unset" },
});

export const Filter = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: -48,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          sx={{
            display: "flex",
            alignItems: "center",
            ".MuiTabs-indicator": { position: "relative" },
            borderRadius: "10px 10px 0 0 ",
          }}
        >
          <CustomTab
            sx={{
              "& .MuiButtonBase-root": {
                backgroundColor: "#FFA21A",
                color: "#000",
              },
            }}
            label="Bán"
            value={0}
          />
          <CustomTab label="Cho Thuê" value={1} />
        </Tabs>
        <Box>
          <Typography variant="p" component="span" sx={{ mx: "10px" }}>
            Hoặc
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "100px",
              padding: "4px 14px",
              fontSize: "14px",
              textTransform: "none",
            }}
          >
            Gửi yêu cầu của bạn
          </Button>
        </Box>
      </Box>
      <Box>
        {value === 0 && <SellFilter />}
        {value === 1 && <div>Content for Item Two</div>}{" "}
        {value === 3 && <div>Content for Item Three</div>}{" "}
      </Box>
    </Box>
  );
};
