import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

function BreedItem({ attributes }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {attributes.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {attributes.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default BreedItem;
