import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";
import junction from "../../../assets/Semiconductor/PNJunction.mp4";
import diode from "../../../assets/Semiconductor/SemiconductorDiode.mp4";

const PNJunction = () => {
  const [url, setUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = (value)=>{
    setUrl(value);
    setShowVideo(true);
  }

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={9}>
          {showVideo && (
            <ReactPlayer
              url={url}
              controls
              playing
              width={"100%"}
              height={"100%"}
            />
          )}
        
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack spacing={1} direction="column" alignContent={"center"}>
            <Box mt={2} />
            <Typography>Learn?</Typography>
            <Button
              variant="contained"
              onClick={() => handleClick(junction)}
            >
              p-n junction Formation
            </Button>
            <Button
              variant="contained"
              onClick={() => handleClick(diode)}
            >
              Semiconductor diode
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PNJunction;
