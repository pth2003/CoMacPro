import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
function Header() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: "8px",
      }}
    >
      <Typography variant="h4" component={"div"}>
        Todo Feature
      </Typography>
      <Box component={"div"} display={"flex"} alignItems={"center"} gap={1}>
        <Typography>Hello, {user.firstName}</Typography>
        <Avatar alt={user.username} src={user.image} />
      </Box>
    </Box>
  );
}

export default Header;
