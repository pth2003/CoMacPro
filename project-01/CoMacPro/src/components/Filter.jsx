import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SellFilter } from "./SellFilter";

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
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Bán" value={0} />
          <Tab label="Cho Thuê" value={1} />
          <Tab label="Hoặc" value={2} disabled />
          <Tab label="Gửi yêu cầu của bạn" value={3} />
        </Tabs>
      </Box>
      <Box>
        {value === 0 && <SellFilter />}
        {value === 1 && <div>Content for Item Two</div>}{" "}
        {value === 3 && <div>Content for Item Three</div>}{" "}
      </Box>
    </Box>
  );
};
