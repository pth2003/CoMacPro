import { Button, ButtonGroup, styled } from "@mui/material";
import React, { useState } from "react";
const CustomButtonGroup = styled(ButtonGroup)({
  boxShadow: "none",
  gap: "20px",
  flexWrap: "wrap",
  "& .MuiButton-contained": {
    backgroundColor: "#FFA21A",
    textTransform: "none",
    border: "none",
    color: "#000",
    borderRadius: "10px",
  },
  "& .MuiButton-outlined": {
    backgroundColor: "#EDEDED",
    textTransform: "none",
    border: "none",
    color: "#000",
    borderRadius: "10px",
  },
});
export const ListItem = ({ listCategory }) => {
  const [selectedButton, setSelectedButton] = useState(listCategory[0]);
  return (
    <CustomButtonGroup variant="contained" aria-label="Basic button group">
      {listCategory.map((item, index) => (
        <Button
          onClick={() => setSelectedButton(item)}
          variant={selectedButton === item ? "contained" : "outlined"}
          tabIndex={index}
        >
          {item}
        </Button>
      ))}
    </CustomButtonGroup>
  );
};
