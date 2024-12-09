import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import Image3 from "../assets/image/discover-section-1.png";
import Image1 from "../assets/image/discover-section-2.png";
import Image2 from "../assets/image/discover-section-3.png";
import Image4 from "../assets/image/discover-section-2.png";
import { Heading } from "./Heading";
import { FAQitem } from "./FAQitem";
const CustomGrid = ({ images }) => {
  return (
    <Grid
      size={{ xs: 0, md: 5 }}
      offset={{ md: 1 }}
      sx={{
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          sx={{
            transition: "transform 0.3s ease-in-out",
            transform:
              index % 2 === 0 ? "translateY(-200px)" : "translateY(-50px)",
          }}
        />
      ))}
    </Grid>
  );
};
const images = [Image1, Image2, Image3, Image4];
const faqs = [
  {
    question: "What is Antbuildz.com?",
    answer:
      "Antbuildz.com is the first and largest online construction equipment rental platform in South East Asia. We make your equipment rentals Smarter, Faster, Easier, and Safer by streamlining the entire rental process into a few clicks. With the power of digitalization, we help construction equipment owners connect their underutilized equipment to all users across Singapore and Malaysia. You can refer to our quick User Guide here.",
  },
  {
    question: "How do I sign up and start renting on Antbuildz.com?",
    answer:
      "Signing up on Antbuildz.com is easy. Simply go to the sign-up page, fill in your details, and follow the instructions to complete the process. Once your account is verified, you can start browsing and renting equipment.",
  },
  {
    question: "How do I start renting equipment on Antbuildz.com?",
    answer:
      "To start renting equipment, first, make sure you are logged into your account. Then, browse through the available equipment, select the one you need, and follow the rental process. You can choose the rental duration and any additional services you might need.",
  },
  {
    question: "What is the minimum rental duration?",
    answer:
      "The minimum rental duration for equipment on Antbuildz.com varies depending on the type of equipment. Please refer to the specific equipment details for the minimum rental period.",
  },
];
export const FAQSection = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          backgroundColor: "#FFC900",
          borderRadius: "30px",
          maxHeight: "400px",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ padding: "60px" }}>
            <Typography variant="h3" component="h3">
              Khám phá hàng nghìn thiết bị thuộc hàng trăm danh mục.
            </Typography>
            <Typography my={2}>
              Tất cả đều có sẵn, đã đăng ký và sẵn sàng cho thuê tại
              ComacPro.com.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2C2A29",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "10px",
              }}
            >
              Tìm kiếm ngay
            </Button>
          </Grid>
          <CustomGrid images={images} />
        </Grid>
      </Box>
      <Box my={5}>
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Heading content={"Các câu hỏi thường gặp"} />
          <Button
            sx={{
              backgroundColor: "#FFA21A",
              color: "#000",
              padding: "12px 20px",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Xem thêm FAQs
          </Button>
        </Box>
        <Typography>
          Nếu bạn có thêm câu hỏi, hãy truy cập FAQs của chúng tôi
        </Typography>
        <Grid container spacing={4}>
          {faqs.map((faq, index) => (
            <Grid size={{ xs: 12, md: 6 }}>
              <FAQitem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
