import React from "react";
import Grid from "@mui/material/Grid2";
import StarIcon from "@mui/icons-material/Star";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ProductImg from "../assets/image/product.png";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Rating,
  Typography,
} from "@mui/material";
export const ProductCard = ({ product, index }) => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150px"
          image={product.imgSrc}
          alt="product-01"
        />
        <Box
          sx={{
            position: "absolute",
            top: "8px",
            right: "8px",
            backgroundColor: "#FFA21ACC",
            borderRadius: "10px",
            padding: "6px",
            width: "36px",
            height: "36px",
          }}
        >
          <VerifiedUserIcon sx={{ color: "#fff", fontSize: "24px" }} />
        </Box>
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography
            gutterBottom
            variant="h6"
            fontWeight="bold"
            component="div"
            sx={{ lineHeight: 1.2 }}
          >
            {product.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StarIcon sx={{ fontSize: "20px", color: "#FFA21A" }} />
            <Typography variant="p" sx={{ marginLeft: "5px" }}>
              <span style={{ color: "#FFA21A", fontWeight: "bold" }}>
                {product.score}
              </span>
              /5
            </Typography>
          </Box>
          <Typography
            variant="body2"
            display="flex"
            justifyContent="space-between"
          >
            <span>Nhãn hiệu</span> <span>{product.details.brand}</span>
          </Typography>
          <Typography
            variant="body2"
            display="flex"
            justifyContent="space-between"
          >
            <span>Model</span> <span>{product.details.model}</span>
          </Typography>
          <Typography
            variant="body2"
            display="flex"
            justifyContent="space-between"
          >
            <span>Năm sản xuất</span> <span>{product.details.year}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "7px",

          "&::before": {
            content: '""',
            height: "1px",
            width: "100%",
            backgroundColor: "#ccc",
          },
        }}
      >
        <Typography variant="p" component="span">
          <span style={{ color: "#FFA21A", fontWeight: "bold" }}>
            {product.price.day}
          </span>
          /day
        </Typography>
        <Typography variant="p" component="span">
          <span style={{ color: "#FFA21A", fontWeight: "bold" }}>
            {product.price.month}
          </span>
          /week
        </Typography>
        <Typography variant="p" component="span">
          <span style={{ color: "#FFA21A", fontWeight: "bold" }}>
            {product.price.month}
          </span>
          /month
        </Typography>
      </CardContent>
    </Card>
  );
};
