import React from "react";
import Grid from "@mui/material/Grid2";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CategoryImg from "../assets/image/image 4.png";
import ProductImg from "../assets/image/123 1.png";
import { CardProductCategory } from "./CardProductCategory";
const categoryData = [
  {
    title: "Excavator 1",
    img: ProductImg,
    isCategory: false,
    buttonAction: "",
  },
  {
    title: "Excavator 2",
    img: ProductImg,
    isCategory: false,
    buttonAction: "",
  },
  {
    title: "Excavator 3",
    img: ProductImg,
    isCategory: false,
    buttonAction: "",
  },
  {
    title: "Excavator 4",
    img: ProductImg,
    isCategory: false,
    buttonAction: "",
  },
];
export const ListProductCategory = () => {
  return (
    <Grid container spacing={0} sx={{ py: 3 }}>
      <Grid size={{ xs: 12, md: 12 / 5 }}>
        <Card
          sx={{
            //minHeight: "342px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px 39px",
            backgroundColor: "#FFC900",
          }}
          variant="outlined"
        >
          <CardContent>
            <Typography variant="h5" fontWeight="bold" component="div">
              Earth Moving
            </Typography>
          </CardContent>
          <CardMedia
            image={CategoryImg}
            sx={{
              height: "150px",
              width: "100%",
              my: 2,
              display: { xs: "none", md: "block" },
            }}
          />
          <CardActions sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              sx={{
                border: "2px solid #000",
                color: "#000",
                padding: "8px 40px",
                borderRadius: "10px",
                textTransform: "none",
              }}
            >
              Xem tất cả
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        size={{ xs: 12, md: 12 - 12 / 5 }}
        sx={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}
      >
        {categoryData.map((item, index) => (
          <Grid
            size={{ xs: 8, md: 3 }}
            sx={{ minWidth: { xs: "276px", md: 0 } }}
          >
            <CardProductCategory
              title={item.title}
              img={item.img}
              index={index}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
