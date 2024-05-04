import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChaptersSidePanel from "../components/ChaptersSidePanel";
import Temp from "../components/Temp";
import Grid from '@mui/material/Grid';
import Section from "./Sections";

export default function Chapter({ chapter }) {
  const [infoDetails, setInfoDetails] = useState({ chapter: chapter, section: chapter.sections[0] });

  return (
    <>
      {/* <div className="border-2 border-black">
        <Temp />
      </div> */}
      <Grid container spacing={2} sx={{ border: "solid 2px black" }} minHeight={600}>
        <Grid item xs={3}>
          <ChaptersSidePanel chapter={chapter} setInfoDetails={setInfoDetails} />
        </Grid>
        <Grid item xs={9} className="border-4 border-red-800">
          <Section chapter={infoDetails.chapter} section={infoDetails.section} />
        </Grid>
      </Grid>
    </>
  )
};
