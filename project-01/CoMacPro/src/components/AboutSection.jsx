import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Heading } from "./Heading";
import Grid from "@mui/material/Grid2";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Icon1 from "../assets/image/wallet.png";
import Icon2 from "../assets/image/arrow.png";
import Icon3 from "../assets/image/truck-fast.png";
import Icon4 from "../assets/image/shield-tick.png";
import Image from "../assets/image/image 5.png";
import StepImg from "../assets/image/Frame 68 1.png";
const ImageData = [
  {
    src: Image,
  },
  {
    src: Image,
  },
  {
    src: Image,
  },
  {
    src: Image,
  },
  {
    src: Image,
  },
  {
    src: Image,
  },
  {
    src: Image,
  },
  {
    src: Image,
  },
];
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
export const AboutSection = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 10, mb: 5 }}>
      <Box my={5}>
        <Grid container spacing={4} position="relative">
          <Grid size={{ xs: 12, md: 4 }}>
            <Heading content={"Tại sao chọn chúng tôi?"} />
            <Typography variant="p" component="div">
              4 Giá trị chính của nền tảng cho thuê
            </Typography>
            <List>
              <ListItem sx={{ paddingLeft: 0 }}>
                <ListItemIcon>
                  <CheckBoxIcon sx={{ color: "#FFA21A" }} />
                </ListItemIcon>
                <ListItemText primary="Giá tốt nhất" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0 }}>
                <ListItemIcon>
                  <CheckBoxIcon sx={{ color: "#FFA21A" }} />
                </ListItemIcon>
                <ListItemText primary="Flexible Duration" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0 }}>
                <ListItemIcon>
                  <CheckBoxIcon sx={{ color: "#FFA21A" }} />
                </ListItemIcon>
                <ListItemText primary="Nhanh chóng & Dễ dàng" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0 }}>
                <ListItemIcon>
                  <CheckBoxIcon sx={{ color: "#FFA21A" }} />
                </ListItemIcon>
                <ListItemText primary="Minh bạch & Bảo mật" />
              </ListItem>
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{ borderRadius: "20px", padding: "40px 20px", my: "30px" }}
            >
              <Box
                sx={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "#FFA21A",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  image={Icon1}
                  sx={{
                    height: "32px",
                    width: "32px",
                  }}
                />
              </Box>
              <CardContent sx={{ px: 0 }}>
                <Typography variant="h6" component="h5" fontWeight="bold">
                  Giá tốt nhất
                </Typography>
                <Typography variant="p">
                  No more expensive prices! We help you discover the best market
                  rates throughout Vietnam.
                </Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{ borderRadius: "20px", padding: "40px 20px", my: "30px" }}
            >
              <Box
                sx={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "#FFA21A",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  image={Icon3}
                  sx={{
                    height: "32px",
                    width: "32px",
                  }}
                />
              </Box>
              <CardContent sx={{ px: 0 }}>
                <Typography variant="h6" component="h5" fontWeight="bold">
                  Nhanh chóng & Dễ dàng
                </Typography>
                <Typography variant="p">
                  No more sourcing and negotiating! We help you source and
                  compare quotes within a few clicks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              position: { xs: "relative", md: "absolute" },
              top: "-30px",
              right: 0,
            }}
          >
            <Card
              variant="outlined"
              sx={{
                borderRadius: "20px",
                padding: "40px 20px",
                my: { xs: "0 30px", md: "30px" },
              }}
            >
              <Box
                sx={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "#FFA21A",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  image={Icon2}
                  sx={{
                    height: "32px",
                    width: "32px",
                  }}
                />
              </Box>
              <CardContent sx={{ px: 0 }}>
                <Typography variant="h6" component="h5" fontWeight="bold">
                  Flexible Duration
                </Typography>
                <Typography variant="p">
                  Rent your equipment for as short as one day for up to months
                  according to your needs.
                </Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{ borderRadius: "20px", padding: "40px 20px", my: "30px" }}
            >
              <Box
                sx={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "#FFA21A",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  image={Icon4}
                  sx={{
                    height: "32px",
                    width: "32px",
                  }}
                />
              </Box>
              <CardContent sx={{ px: 0 }}>
                <Typography variant="h6" component="h5" fontWeight="bold">
                  Minh bạch & Bảo mật
                </Typography>
                <Typography variant="p">
                  Have information of all available equipment at one glance from
                  well- vetted suppliers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box mb={5}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ImageList cols={4} gap="20px">
              {ImageData.map((item, index) => (
                <ImageListItem
                  index={index}
                  sx={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img src={item.src} alt="product" loading="lazy" />
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      top: "6px",
                      right: "6px",
                      backgroundColor: "#3D3D3DCC",
                      width: "36px",
                      height: "36px",
                      padding: "6px",
                      borderRadius: "10px",
                    }}
                  >
                    <VerifiedUserIcon sx={{ color: "#FFA21A" }} />
                  </Box>
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} offset={{ xs: 0, md: 1 }}>
            <Heading content={"Chúng tôi bảo hiểm cho thuê thiết bị"} />
            <Typography variant="p" component="div">
              Hợp tác với HongLeong Assurance, thiết bị thuê từ ComacPro được
              cung cấp bảo hiểm miễn phí trị giá 300 triệu đồng.
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FFA21A", color: "#000", my: 3 }}
            >
              Xem chi tiết
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box mb={5}>
        <Heading content={"Thuê thiết bị chỉ trong vài cú nhấp chuột"} />
        <Typography variant="p" component="div">
          Chúng tôi cố gắng tạo ra trải nghiệm cho thuê nhanh chóng và liền mạch
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{ borderRadius: "30px", padding: "30px" }}
            >
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  variant="h4"
                  component="div"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#FFA21A" }}
                >
                  01
                </Typography>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Tìm Kiếm
                </Typography>
                <Typography variant="p">
                  Tìm kiếm thiết bị theo chủng loại, công suất mọi lúc, mọi nơi.
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                image={StepImg}
                alt="step-01"
                sx={{ m: "0px auto", width: "auto" }}
              />
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{ borderRadius: "30px", padding: "30px" }}
            >
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  variant="h4"
                  component="div"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#FFA21A" }}
                >
                  02
                </Typography>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  So sánh
                </Typography>
                <Typography variant="p">
                  So sánh các thiết bị có sẵn, mức giá và thông số kỹ thuật.
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                image={StepImg}
                alt="step-01"
                sx={{ m: "0px auto", width: "auto" }}
              />
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{ borderRadius: "30px", padding: "30px" }}
            >
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  variant="h4"
                  component="div"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#FFA21A" }}
                >
                  03
                </Typography>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Thuê ngay
                </Typography>
                <Typography variant="p">
                  Đặt trước thiết bị và xác nhận đơn hàng bằng cách thanh toán.
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                image={StepImg}
                alt="step-01"
                sx={{ m: "0px auto", width: "auto" }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Heading
              content={"Kiếm thêm thu nhập với thiết bị nhàn rỗi của bạn"}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }} py={3}>
            <Typography>
              Thay vì để thiết bị của bạn không hoạt động, tại sao không để nó
              kiếm tiền cho bạn? Đăng ký và cho thuê chúng chỉ trong vài cú nhấp
              chuột với bảo hiểm mọi rủi ro trị giá 300 triệu miễn phí tại
              ComacPro.com!
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FFA21A", color: "#000", my: 3 }}
            >
              Đăng ký đối tác ngay
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
