import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChaptersSidePanel from "../components/ChaptersSidePanel";
import Grid from '@mui/material/Grid';
import Section from "./Sections";

export default function Chapter({ chapter }) {
  const [infoDetails, setInfoDetails] = useState({ chapterId: chapter.sections[0], sectionIndex: 0 });

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ChaptersSidePanel chapter={chapter} setInfoDetails={setInfoDetails}/>
        </Grid>
        <Grid item xs={9} >
          <Section chapterId={infoDetails.chapterId} sectionIndex={infoDetails.sectionIndex} />
        </Grid>
      </Grid>
    </>
  )
};
