import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChaptersSidePanel from "../components/ChaptersSidePanel";
import Temp from "../components/Temp";
import { Button, Container, Box} from '@mui/material';
import Section from "./Sections";

export default function Chapter({ chapter }) {

      const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };
  return (
    // <>
    <Container>
      {chapter.sections.map((section, index) => (
        <Section key={index} chapter={chapter} section={section} />
      ))}
      <Button variant="contained" color="primary" onClick={scrollToTop} m={2}>
          Scroll to Top
        
      </Button>
      <Box m={4}/>
    </Container>

    // {/* <div className="border-2 border-black" style={{height: "1vh"}}>
    //   <Temp props={{infoDetails: infoDetails, setInfoDetails: setInfoDetails}}/>

    // </div> */}

    // {/* <Grid container spacing={2} sx={{ border: "solid 2px black" }} minHeight={600}>
    //   <Grid item xs={3}>
    //     <ChaptersSidePanel chapter={chapter} setInfoDetails={setInfoDetails} />
    //   </Grid>
    //   <Grid item xs={9} className="border-4 border-red-800">
    //     <Section chapter={infoDetails.chapter} section={infoDetails.section} />
    //   </Grid>
    // </Grid> */}
    // </>
  );
};
