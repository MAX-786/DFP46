import React, { useState } from "react";
import { Container, Grid, Box, Typography, Button, Stack } from "@mui/material";
import "./AtomicSpectra.css"; // Create this file for styling
import { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import Chart from "chart.js/auto";

import VideoURL from "../../../assets/Atoms/ElectronOrbits.mp4";

const AtomicSpectra = () => {

  // Render content based on user selection
  const renderContent = () => {
    return (
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <ReactPlayer
            url={VideoURL}
            playing
            controls
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
        />
        </div>
    );
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {/* First column */}
        <Grid item xs={12} md={1}>
        </Grid>
        <Grid item xs={12} md={10}>
          {renderContent()}
        </Grid>
        {/* Second column */}
        <Grid item xs={12} md={1}>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AtomicSpectra;
