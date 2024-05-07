import React, { useState } from "react";
import { Container, Grid, Box, Typography, Button, Stack } from "@mui/material";
import "./RutherfordsExp.css"; // Create this file for styling
import { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import Chart from "chart.js/auto";

const IframData = () => {
  return (
    <>
        <div style={{background: "black", width: "100%", height: "2.1em", position: "relative", top: "2.1em", zIndex: 2}}></div>
        <iframe
        src="/src/utils/Atoms/labs/rutherford_exp_files/atom_rutheford_Canvas1.html" // Replace with the URL of your iframe content
        width="100%" // Adjust the width as needed
        height="500em" // Adjust the height as needed
        style={{ position: "relative", top: 0, left: 0 , border: "1em solid black"}} // Remove border if not needed
        ></iframe>
    </>
  );
};

const RutherfordsExp = () => {
  // Render content based on user selection

const [displayContent, setDisplayContent] = useState(null);

  // Function to handle the button click for Conductivity/Resistivity
  const handleConductivityClick = () => {
    setDisplayContent("conductivity");
  };

  // Function to handle the button click for Energy Bands
  const handleEnergyBandsClick = () => {
    setDisplayContent("energy");
  };

  // Function to handle the button click for Learn
  const handleLearnClick = () => {
    setDisplayContent("learn");
  };


  const renderContent = () => {
    return <IframData />;
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {/* First column */}
        <Grid item xs={12} md={1}>
          {/* <Stack spacing={2} direction="column">
            <Typography>Classify solids on the basis of:</Typography>
            <Button variant="contained" onClick={handleConductivityClick}>
              Conductivity/Resistivity
            </Button>
            <Button variant="contained" onClick={handleEnergyBandsClick}>
              Energy Bands
            </Button>
            <Typography>Do you want to revise?</Typography>
            <Button variant="contained" onClick={handleLearnClick}>
              Learn
            </Button>
          </Stack> */}
        </Grid>
        <Grid item xs={12} md={10}>
          {renderContent()}
        </Grid>
        {/* Second column */}
        <Grid item xs={12} md={1}>
          {/* <Stack spacing={2} direction="column">
            <Typography>Classify solids on the basis of:</Typography>
            <Button variant="contained" onClick={handleConductivityClick}>
              Conductivity/Resistivity
            </Button>
            <Button variant="contained" onClick={handleEnergyBandsClick}>
              Energy Bands
            </Button>
            <Typography>Do you want to revise?</Typography>
            <Button variant="contained" onClick={handleLearnClick}>
              Learn
            </Button>
          </Stack> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default RutherfordsExp;
