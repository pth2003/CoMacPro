import React from "react";
import Grid from "@mui/material/Grid2";

import BreedItem from "./BreedItem";

import PageLoading from "./PageLoading";
import { Typography } from "@mui/material";
function BreedList({ data, loading, error }) {
  return (
    <Grid container spacing={2}>
      {loading && <PageLoading />}
      {error && <Typography>{error.message}</Typography>}
      {Array.isArray(data) &&
        data.map((dataItem) => (
          <Grid size={4} key={dataItem.id}>
            <BreedItem attributes={dataItem.attributes} />
          </Grid>
        ))}
    </Grid>
  );
}

export default BreedList;
