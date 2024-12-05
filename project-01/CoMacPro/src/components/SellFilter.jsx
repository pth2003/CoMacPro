import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { InputWithIcon } from "./InputWithIcon";
export const SellFilter = () => {
  return (
    <Box>
      <nav aria-label="main sellbox">
        <List>
          <ListItem>
            <InputWithIcon icon={SearchIcon} label="Danh Mục" />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
