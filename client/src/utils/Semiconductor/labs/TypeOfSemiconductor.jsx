import React, { useState } from "react";
import { Container, Grid, Box, Typography, Button, Stack } from "@mui/material";
import { useRef, useEffect } from "react";
import ReactPlayer from "react-player";

import VideoURL from "../../../assets//Semiconductor/IntrinsicExtrinsic.mp4";


const TypeOfSemiconductor = () => {
  
  return (
    <Container>
      {/* <div style={{ position: "relative", paddingTop: "56.25%" }}> */}
        <ReactPlayer
          url={VideoURL}
          playing
          controls
          width="100%"
          height="100%"
        //   style={{ position: "absolute", top: 0, left: 0 }}
        />
      {/* </div> */}
    </Container>
  );
};

export default TypeOfSemiconductor;