import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { LogoBrand } from "./LogoBrand";
import Logo from "../assets/image/CMP logo - horizon - white 1.png";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
export const Footer = () => {
  return (
    <>
      <LogoBrand />
      <Container maxWidth="xl" sx={{ backgroundColor: "#FFC900" }}>
        <Grid container spacing={4} py={5}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box component={"img"} src={Logo} />
            <Typography>
              Lorem ipsum dolor sit amet consectetur. Integer enim dolor nunc
              consequat elit nec in. Commodo luctus tellus viverra aliquam ut
              feugiat dignissim. Odio volutpat sed laoreet dignissim ornare
              pharetra. Elementum diam et sit hendrerit.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} offset={{ xs: 0, md: 1 }}>
            <Grid container spacing={3}>
              <Grid size={6}>
                <Box component={"div"} mb={3}>
                  <Typography
                    variant="p"
                    component={"div"}
                    sx={{ fontWeight: "bold" }}
                  >
                    Người dùng
                  </Typography>
                  <List>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="FAQS" />
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="Hướng dẫn thuê" />
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="Hướng dẫn mua" />
                    </ListItem>
                  </List>
                </Box>
                <Box component={"div"}>
                  <Typography
                    variant="p"
                    component={"div"}
                    sx={{ fontWeight: "bold" }}
                  >
                    Đối tác
                  </Typography>
                  <List>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="FAQS" />
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="Trở thành đối tác" />
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="Hướng dẫn bán" />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box component={"div"}>
                  <Typography
                    variant="p"
                    component={"div"}
                    sx={{ fontWeight: "bold" }}
                  >
                    Truy cập nhanh
                  </Typography>
                  <List>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="Đăng kí" />
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="Về chúng tôi" />
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="Sản phẩm" />
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="Blogs" />
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="Bảo hiểm" />
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="Điều kiện" />
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                      <ListItemText primary="FAQs" />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <Box component={"div"} mb={{ xs: 1, md: 8 }}>
              <Typography
                variant="p"
                component={"div"}
                sx={{ fontWeight: "bold" }}
              >
                Liên hệ
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur. Vitae nulla amet sed
                tortor orci quis tellus.
              </Typography>
            </Box>
            <Box component={"div"}>
              <Typography
                variant="p"
                component={"div"}
                sx={{ fontWeight: "bold" }}
              >
                Hotline
              </Typography>
              <Typography>+65-88831 8705</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <Box component={"div"} mb={{ xs: 1, md: 12 }}>
              <Typography
                variant="p"
                component={"div"}
                sx={{ fontWeight: "bold" }}
              >
                Mạng xã hội
              </Typography>
              <List sx={{ display: "flex" }}>
                <ListItem sx={{ padding: 0 }}>
                  <XIcon />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <YouTubeIcon />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <LinkedInIcon />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <FacebookRoundedIcon />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <GitHubIcon />
                </ListItem>
              </List>
            </Box>
            <Box>
              <Typography
                variant="p"
                component={"div"}
                sx={{ fontWeight: "bold" }}
              >
                Email
              </Typography>
              <Typography>info@comacpro.com</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Typography component={"div"} py={2} textAlign={"center"}>
        © 2024 comacPro. Ltd. All Rights Reserved
      </Typography>
    </>
  );
};
