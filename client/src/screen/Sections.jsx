import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Container,
  Grid,
  Paper,
  Box,
  useMediaQuery,
  useTheme,
  Button,
  Collapse,
} from "@mui/material";

export default function Section({ chapter, section }) {
  // Assuming some data structure to retrieve content for a section
  const sectionContent = `Content for ${chapter.name} - ${chapter.id}.${section.id} ${section.name}`;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [openLabComponents, setOpenLabComponents] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setOpenLabComponents(!openLabComponents);
  };
  // const handleClick = (index) => {
  //   setOpenLabComponents({
  //     ...openLabComponents,
  //     [index]: !openLabComponents[index],
  //   });
  // };

    // const scrollToTop = () => {
    //     window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //     });
    // };

  return (
      <Container>
        {/* {chapter.sections.map((item, index) => ( */}
          <>
            <Typography variant="h4">{section.name}</Typography>
            <Box mt={2} />
            {section.subtopic.map((subitem, subindex) => (
              <Box key={subindex}>
                {subitem.title && (
                  <Typography variant="h5" padding={1.5}>
                    {subitem.title}
                  </Typography>
                )}
                <Stack
                  spacing={2}
                  direction={
                    isSmallScreen || subitem.image.length > 1 ? "column" : "row"
                  }
                >
                  <Box mt={2} />
                  <Typography sx={{lineHeight: "2rem"}}>{subitem.text}</Typography>
                  <Box
                    display="flex"
                    flexDirection={isSmallScreen ? "column" : "row"}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {Array.isArray(subitem.image) &&
                      subitem.image.length > 0 &&
                      subitem.image.map((imageUrl, index) => (
                        <img
                          key={index}
                          src={imageUrl}
                          alt={`${subitem.title}`}
                          style={{
                            maxWidth: "250px",
                            height: "250px",
                            margin: "8px",
                          }}
                        />
                      ))}
                  </Box>
                </Stack>
              </Box>
            ))}
            {section.isLab && (
              <Stack
                mt={2}
                border={1}
                borderColor="grey.500"
                borderRadius={1}
                p={1}
              >
                <Button variant="contained" onClick={() => handleClick()}>
                  {openLabComponents
                    ? "Hide Lab Component"
                    : "Show Lab Component"}
                </Button>
                {/* <Collapse in={openLabComponents[index]}> */}
                <Collapse in={openLabComponents}>
                  <Box mt={4} />
                  {<section.lab />}
                </Collapse>
              </Stack>
            )}
            <Box mt={4} />
          </>
        {/* ))} */}
        {/* <Button variant="contained" color="primary" onClick={scrollToTop}>
          Scroll to Top
        </Button> */}
      </Container>

  );
}
