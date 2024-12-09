import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { Heading } from "./Heading";
import Grid from "@mui/material/Grid2";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
export const FeedbackSection = () => {
  return (
    <Container maxWidth="xl">
      <Heading content={"Khách hàng nói về chúng tôi"} />
      <Typography>
        Share with us your feedback to serve you better on our Google Review
      </Typography>
      <Grid container spacing={4} my={3}>
        <Grid size={4}>
          <Card
            variant="outlined"
            sx={{ padding: "40px 30px", borderRadius: "30px" }}
          >
            <CardContent>
              <Box
                my={"15px"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                }}
              >
                <FormatQuoteRoundedIcon
                  sx={{ fontSize: "60px", color: "#FFA21A66" }}
                />
                <Rating value={5} readOnly />
              </Box>
              <Typography variant="p" component="div" gutterBottom>
                We are committed to providing our customers with super
                exceptional service while offering our employees the best
                training and a working environment in which they can excel best
                of all place for more than a half century. This company focus
                has been in place for more than a half century. We are
                committed.
              </Typography>
              <Typography variant="p" fontSize="18px" fontWeight="bold">
                Tuấn Anh
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4}>
          <Card
            variant="outlined"
            sx={{ padding: "40px 30px", borderRadius: "30px" }}
          >
            <CardContent>
              <Box
                my={"15px"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                }}
              >
                <FormatQuoteRoundedIcon
                  sx={{ fontSize: "60px", color: "#FFA21A66" }}
                />
                <Rating value={5} readOnly />
              </Box>
              <Typography variant="p" component="div" gutterBottom>
                We are committed to providing our customers with super
                exceptional service while offering our employees the best
                training and a working environment in which they can excel best
                of all place for more than a half century. This company focus
                has been in place for more than a half century. We are
                committed.
              </Typography>
              <Typography variant="p" fontSize="18px" fontWeight="bold">
                Tuấn Anh
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4}>
          <Card
            variant="outlined"
            sx={{ padding: "40px 30px", borderRadius: "30px" }}
          >
            <CardContent>
              <Box
                my={"15px"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                }}
              >
                <FormatQuoteRoundedIcon
                  sx={{ fontSize: "60px", color: "#FFA21A66" }}
                />
                <Rating value={5} readOnly />
              </Box>
              <Typography variant="p" component="div" gutterBottom>
                We are committed to providing our customers with super
                exceptional service while offering our employees the best
                training and a working environment in which they can excel best
                of all place for more than a half century. This company focus
                has been in place for more than a half century. We are
                committed.
              </Typography>
              <Typography variant="p" fontSize="18px" fontWeight="bold">
                Tuấn Anh
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
