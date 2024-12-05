import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LogoPc from "../assets/image/logo-pc.png";
import LogoMb from "../assets/image/Frame 427318179.png";
const pages = ["Bán", "Cho Thuê", "Danh mục", "Blogs", "FAQ", "Về chúng tôi"];
export const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "unset" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            component="img"
            src={LogoPc}
            alt="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
          />
          <Box
            component="img"
            src={LogoMb}
            alt="logo"
            sx={{ display: { xs: "flex", md: "none" } }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="ounlined"
              sx={{ mx: 2, color: "#FFA21A", outline: "1px solid #FFA21A" }}
            >
              Đăng ký
            </Button>
            <Button variant="contained">Đăng nhập</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
