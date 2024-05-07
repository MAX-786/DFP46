import React from "react";
import { Container, Grid,} from "@mui/material";
import "./BohrsModel.css"; // Create this file for styling

const IframData = () => {
  return (
    <>
      <iframe
        src="/src/utils/Atoms/labs/bohrs_model_files/atom_vodik_Canvas.html" // Replace with the URL of your iframe content
        width="100%" // Adjust the width as needed
        height="500em" // Adjust the height as needed
        style={{
          position: "relative",
          top: 0,
          left: 0,
          border: "1em solid black",
        }} // Remove border if not needed
      ></iframe>
      <div
        style={{
          background: "black",
          width: "100%",
          height: "2.1em",
          position: "relative",
          bottom: "2.1em",
          zIndex: 2,
        }}
      ></div>
    </>
  );
};

const BohrsModel = () => {

  const renderContent = () => {
    return <IframData />;
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={1}>
        {/* First column */}
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

export default BohrsModel;
