import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { breedsFetch } from "../../redux/slice/breedSlice";
import { Box, Typography } from "@mui/material";
import BreedList from "../components/BreedList";
import NetworkListener from "../components/NetworkListener";
import DisconnectPage from "./DisconnectPage";
function BreedPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.breed);
  const isConnected = useSelector((state) => state.network.isConnected);
  useEffect(() => {
    dispatch(breedsFetch());
  }, []);

  return (
    <Box>
      <NetworkListener />
      {!isConnected && <DisconnectPage />}
      {isConnected && (
        <Box>
          <Typography variant="h2" my={3} textAlign={"center"}>
            Ten popular dog breeds
          </Typography>
          <BreedList data={data} loading={loading} error={error} />
        </Box>
      )}
    </Box>
  );
}

export default BreedPage;
