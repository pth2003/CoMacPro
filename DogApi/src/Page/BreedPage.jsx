import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { breedsFetch } from "../../redux/slice/breedSlice";
import { Box, Container, Typography } from "@mui/material";
import BreedList from "../components/BreedList";

import { useNavigate } from "react-router-dom";
import { handleHttpStatusCode } from "../utils/hanldeHttpStatusCode";
function BreedPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.breed);

  useEffect(() => {
    dispatch(breedsFetch());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      handleHttpStatusCode(error, navigate);
    }
    if (!error) {
      navigate("/");
    }
  }, [error, navigate]);

  return (
    <Container>
      <Typography variant="h2" my={3} textAlign={"center"}>
        Ten popular dog breeds
      </Typography>
      <BreedList data={data} loading={loading} error={error} />
    </Container>
  );
}

export default BreedPage;
