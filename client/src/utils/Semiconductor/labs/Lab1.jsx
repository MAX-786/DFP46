// import React, { useState } from "react";
// import { Container, Box, Typography } from "@mui/material";
// import "./Lab1.css"; // Create this file for styling

// const Lab1 = () => {
//   const [isDraggingConduction, setIsDraggingConduction] = useState(false);
//   const [startYConduction, setStartYConduction] = useState(0);

//   const startDragConduction = (e) => {
//     setIsDraggingConduction(true);
//     setStartYConduction(e.clientY || e.touches[0].clientY);
//   };

//   const dragConduction = (e) => {
//     if (!isDraggingConduction) return;

//     const newY = e.clientY || e.touches[0].clientY;
//     const deltaY = newY - startYConduction;

//     const conductionBand = document.getElementById("conductionBand");
//     const newTop = conductionBand.offsetTop + deltaY;

//     if (newTop >= 30 && newTop <= 250) {
//       conductionBand.style.top = `${newTop}px`;
//     }

//     setStartYConduction(newY);
//     checkBandsPosition();
//   };

//   const endDragConduction = () => {
//     setIsDraggingConduction(false);
//   };

//   const checkBandsPosition = () => {
//     const conductionBand = document.getElementById("conductionBand");
//     const valenceBand = document.getElementById("valenceBand");
//     const result = document.getElementById("result");

//     const conductionTop = conductionBand.offsetTop;
//     const valenceTop = valenceBand.offsetTop;

//     const difference = valenceTop - conductionTop;

//     if (difference < 20) {
//       result.textContent = "Metals";
//     } else if (difference > 50) {
//       result.textContent = "Insulator";
//     } else {
//       result.textContent = "Semiconductor";
//     }
//   };

//   return (
//     <Container>
//       <Box
//         id="container"
//         sx={{
//           position: "relative",
//           width: "500px",
//           height: "300px",
//           border: "1px solid #ccc",
//         }}
//       >
//         <Box
//           id="conductionBand"
//           className="band"
//           sx={{
//             top: "50px",
//             backgroundColor: "#FF5733",
//           }}
//           onMouseDown={startDragConduction}
//           onTouchStart={startDragConduction}
//           onMouseMove={dragConduction}
//           onTouchMove={dragConduction}
//           onMouseUp={endDragConduction}
//           onTouchEnd={endDragConduction}
//         >
//           <Typography
//             sx={{
//               position: "absolute",
//               left: "50%",
//               top: "-20px",
//               transform: "translateX(-50%)",
//             }}
//           >
//             Conduction Band
//           </Typography>
//         </Box>
//         <Box
//           id="valenceBand"
//           className="band"
//           sx={{
//             bottom: "50px",
//             backgroundColor: "#3498db",
//           }}
//         >
//           <Typography
//             sx={{
//               position: "absolute",
//               left: "50%",
//               top: "20px",
//               transform: "translateX(-50%)",
//             }}
//           >
//             Valence Band
//           </Typography>
//         </Box>
//         <Box className="axis y-axis">
//           <Typography>Energy</Typography>
//         </Box>
//         <Box
//           id="result"
//           sx={{
//             position: "absolute",
//             bottom: "10px",
//             left: "50%",
//             transform: "translateX(-50%)",
//           }}
//         ></Box>
//       </Box>
//     </Container>
//   );
// };

// export default Lab1;

//*Width 100%
// import React, { useState } from "react";
// import { Container, Box, Typography } from "@mui/material";
// import "./Lab1.css"; // Create this file for styling

// const Lab1 = () => {
//   const [isDraggingConduction, setIsDraggingConduction] = useState(false);
//   const [startYConduction, setStartYConduction] = useState(0);

//   const startDragConduction = (e) => {
//     setIsDraggingConduction(true);
//     setStartYConduction(e.clientY || e.touches[0].clientY);
//   };

//   const dragConduction = (e) => {
//     if (!isDraggingConduction) return;

//     const newY = e.clientY || e.touches[0].clientY;
//     const deltaY = newY - startYConduction;

//     const conductionBand = document.getElementById("conductionBand");
//     const newTop = conductionBand.offsetTop + deltaY;

//     if (newTop >= 30 && newTop <= 250) {
//       conductionBand.style.top = `${newTop}px`;
//     }

//     setStartYConduction(newY);
//     checkBandsPosition();
//   };

//   const endDragConduction = () => {
//     setIsDraggingConduction(false);
//   };

//   const checkBandsPosition = () => {
//     const conductionBand = document.getElementById("conductionBand");
//     const valenceBand = document.getElementById("valenceBand");
//     const result = document.getElementById("result");

//     const conductionTop = conductionBand.offsetTop;
//     const valenceTop = valenceBand.offsetTop;

//     const difference = valenceTop - conductionTop;

//     if (difference < 20) {
//       result.textContent = "Metals (Eg ~ 0ev)";
//     } else if (difference > 50) {
//       result.textContent = "Insulator (Eg > 3ev)";
//     } else {
//       result.textContent = "Semiconductor (Eg < 3ev)";
//     }
//   };

//   return (
//     <Container>
//       <Box
//         id="container"
//         sx={{
//           position: "relative",
//           width: "100%", // make it responsive
//           height: "300px",
//           border: "1px solid #ccc",
//         }}
//       >
//         <Box
//           id="conductionBand"
//           className="band"
//           sx={{
//             top: "50px",
//             backgroundColor: "#FF5733",
//           }}
//           onMouseDown={startDragConduction}
//           onTouchStart={startDragConduction}
//           onMouseMove={dragConduction}
//           onTouchMove={dragConduction}
//           onMouseUp={endDragConduction}
//           onTouchEnd={endDragConduction}
//         >
//           <Typography
//             sx={{
//               position: "absolute",
//               left: "50%",
//               top: "-20px",
//               transform: "translateX(-50%)",
//             }}
//           >
//             Conduction Band
//           </Typography>
//         </Box>
//         <Box
//           id="valenceBand"
//           className="band"
//           sx={{
//             bottom: "50px",
//             backgroundColor: "#3498db",
//           }}
//         >
//           <Typography
//             sx={{
//               position: "absolute",
//               left: "50%",
//               top: "20px",
//               transform: "translateX(-50%)",
//             }}
//           >
//             Valence Band
//           </Typography>
//         </Box>
//         <Box className="axis y-axis">
//           <Typography>Energy</Typography>
//         </Box>
//         <Box
//           id="result"
//           sx={{
//             position: "absolute",
//             top: "10px", // move to top
//             left: "50%",
//             transform: "translateX(-50%)",
//           }}
//         ></Box>
//       </Box>
//     </Container>
//   );
// };

// export default Lab1;



import React, { useState } from "react";
import { Container, Grid, Box, Typography, Button, Stack } from "@mui/material";
import "./Lab1.css"; // Create this file for styling
import  { useRef, useEffect } from "react";
import ReactPlayer from 'react-player';
import Chart from "chart.js/auto";

import VideoURL from "../../../assets//Semiconductor/ConductivityAndEnergy.mp4";

const BarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const data = {
      labels: ["Metals", "Semiconductors", "Insulators"],
      datasets: [
        {
          label: "Resistivity (ρ)",
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)", // Red for Metals
            "rgba(54, 162, 235, 0.5)", // Blue for Semiconductors
            "rgba(255, 206, 86, 0.5)", // Yellow for Insulators
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
          data: [
            { x: "Metals", y: [-2, -8] }, // Resistivity range for Metals (log scale)
            { x: "Semiconductors", y: [-5, 6] }, // Resistivity range for Semiconductors (log scale)
            { x: "Insulators", y: [11, 19] }, // Resistivity range for Insulators (log scale)
          ],
        },
        {
          label: "Conductivity (σ)",
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)", // Red for Metals
            "rgba(54, 162, 235, 0.7)", // Blue for Semiconductors
            "rgba(255, 206, 86, 0.7)", // Yellow for Insulators
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
          data: [
            { x: "Metals", y: [2, 8] }, // Conductivity range for Metals (log scale)
            { x: "Semiconductors", y: [5, -6] }, // Conductivity range for Semiconductors (log scale)
            { x: "Insulators", y: [-11, -19] }, // Conductivity range for Insulators (log scale)
          ],
        },
      ],
    };

    const options = {
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: "Material Type",
          },
        },
        y: {
          type: "logarithmic",
          title: {
            display: true,
            text: "Log Scale",
          },
          ticks: {
            callback: function (value, index, values) {
              return (Number(value)).toLocaleString("en");
            },
          },
        },
      },
    };

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      chartInstance = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
      });
    }

    return () => {
      // Cleanup function to destroy the chart instance
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};


const EnergyBand = () => {
  const [isDraggingConduction, setIsDraggingConduction] = useState(false);
  const [startYConduction, setStartYConduction] = useState(0);

  const startDragConduction = (e) => {
    setIsDraggingConduction(true);
    setStartYConduction(e.clientY || e.touches[0].clientY);
  };

  const dragConduction = (e) => {
    if (!isDraggingConduction) return;

    const newY = e.clientY || e.touches[0].clientY;
    const deltaY = newY - startYConduction;

    const conductionBand = document.getElementById("conductionBand");
    const newTop = conductionBand.offsetTop + deltaY;

    if (newTop >= 30 && newTop <= 250) {
      conductionBand.style.top = `${newTop}px`;
    }

    setStartYConduction(newY);
    checkBandsPosition();
  };

  const endDragConduction = () => {
    setIsDraggingConduction(false);
  };

  const checkBandsPosition = () => {
    const conductionBand = document.getElementById("conductionBand");
    const valenceBand = document.getElementById("valenceBand");
    const result = document.getElementById("result");

    const conductionTop = conductionBand.offsetTop;
    const valenceTop = valenceBand.offsetTop;

    const difference = valenceTop - conductionTop;

    if (difference < 20) {
      result.textContent = "Metals (Eg ~ 0ev)";
    } else if (difference > 50) {
      result.textContent = "Insulator (Eg > 3ev)";
    } else {
      result.textContent = "Semiconductor (Eg < 3ev)";
    }
  };

  return (
    <Container>
      <Typography variant="body2">*Drag Conduction band to classify solids on the basis of Energy Gap</Typography>
      <Box
        id="container"
        sx={{
          position: "relative",
          width: "100%", // make it responsive
          height: "300px",
          border: "1px solid #ccc",
        }}
      >
        <Box
          id="conductionBand"
          className="band"
          sx={{
            top: "50px",
            backgroundColor: "#FF5733",
          }}
          onMouseDown={startDragConduction}
          onTouchStart={startDragConduction}
          onMouseMove={dragConduction}
          onTouchMove={dragConduction}
          onMouseUp={endDragConduction}
          onTouchEnd={endDragConduction}
        >
          <Typography
            sx={{
              position: "absolute",
              left: "50%",
              top: "-20px",
              transform: "translateX(-50%)",
            }}
          >
            Conduction Band
          </Typography>
        </Box>
        <Box
          id="valenceBand"
          className="band"
          sx={{
            bottom: "50px",
            backgroundColor: "#3498db",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              left: "50%",
              top: "20px",
              transform: "translateX(-50%)",
            }}
          >
            Valence Band
          </Typography>
        </Box>
        <Box className="axis y-axis">
          <Typography>Energy (Eg)</Typography>
        </Box>
        <Box
          id="result"
          sx={{
            position: "absolute",
            top: "10px", // move to top
            left: "50%",
            transform: "translateX(-50%)",
          }}
        ></Box>
      </Box>
    </Container>
  );
};

const Lab1 = () => {
  // State for managing the displayed content based on user selection
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

  // Render content based on user selection
  const renderContent = () => {
    switch (displayContent) {
      case "conductivity":
        return (
          <BarGraph/>
        );
      case "energy":
        return (
          <EnergyBand/>
        );
      case "learn":
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
      default:
        return (
          <div>
          </div>
        );
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {/* First column */}
        <Grid item xs={12} md={9}>
          {renderContent()}
        </Grid>
        {/* Second column */}
        <Grid item xs={12} md={3}>
          <Stack spacing={2} direction="column">
            <Typography >
              Classify solids on the basis of:
            </Typography>
            <Button variant="contained" onClick={handleConductivityClick}>
              Conductivity/Resistivity
            </Button>
            <Button variant="contained" onClick={handleEnergyBandsClick}>
              Energy Bands
            </Button>
            <Typography>
              Do you want to revise?
            </Typography>
            <Button variant="contained" onClick={handleLearnClick}>
              Learn
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Lab1;

























// import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";
// import "./Lab1.css";

// function Lab1() {
//   const [bandGap, setBandGap] = useState(1); // Initial band gap value

//   const handleBandGapChange = (event) => {
//     setBandGap(parseFloat(event.target.value));
//   };

//   // Define spring animations
//   const metalBandStyle = useSpring({
//     width: `${Math.min(100, 100 * bandGap)}%`,
//     background: "#ffce54",
//   });
//   const insulatorBandStyle = useSpring({
//     width: `${Math.max(0, Math.min(100, 100 * (bandGap - 1)))}%`,
//     background: "#a0a0a0",
//   });
//   const semiconductorBandStyle = useSpring({
//     width: `${Math.max(0, Math.min(100, 100 * (3 - bandGap)))}%`,
//     background: "#4fc1e9",
//   });

//   return (
//     <div className="Lab1">
//       <h1>Classification of Solids based on Energy Bands</h1>
//       <div className="band-container">
//         <animated.div
//           className="band metal-band"
//           style={metalBandStyle}
//         ></animated.div>
//         <animated.div
//           className="band insulator-band"
//           style={insulatorBandStyle}
//         ></animated.div>
//         <animated.div
//           className="band semiconductor-band"
//           style={semiconductorBandStyle}
//         ></animated.div>
//       </div>
//       <label>
//         Band Gap:
//         <input
//           type="range"
//           min="0"
//           max="3"
//           step="0.1"
//           value={bandGap}
//           onChange={handleBandGapChange}
//         />
//         {bandGap}
//       </label>
//       <div className="legend">
//         <div className="legend-item">
//           <div className="legend-color metal-color"></div>
//           <div className="legend-text">Metal</div>
//         </div>
//         <div className="legend-item">
//           <div className="legend-color insulator-color"></div>
//           <div className="legend-text">Insulator</div>
//         </div>
//         <div className="legend-item">
//           <div className="legend-color semiconductor-color"></div>
//           <div className="legend-text">Semiconductor</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Lab1;

// import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";
// import "./Lab1.css"; // Assume you have Lab1.css for styling

// const Lab1 = () => {
//   const [isDraggingConduction, setIsDraggingConduction] = useState(false);
//   const [startYConduction, setStartYConduction] = useState(0);
//   const [bandGap, setBandGap] = useState(1); // Initial band gap value
//   const [materialType, setMaterialType] = useState("Metal"); // Initial material type

//   const handleBandGapChange = (event) => {
//     setBandGap(parseFloat(event.target.value));
//     checkMaterialType();
//   };

//   const conductionBandStyle = useSpring({
//     top: `${50 - bandGap * 10}%`, // Adjust the multiplier for proper positioning
//   });

//   const startDragConduction = (e) => {
//     setIsDraggingConduction(true);
//     setStartYConduction(e.clientY || e.touches[0].clientY);
//   };

//   const dragConduction = (e) => {
//     if (!isDraggingConduction) return;

//     const newY = e.clientY || e.touches[0].clientY;
//     const deltaY = newY - startYConduction;

//     const newTop = 50 + deltaY / 3; // Adjust the divisor for smoothness

//     if (newTop >= 10 && newTop <= 90) {
//       setBandGap((100 - newTop) / 10);
//       checkMaterialType();
//     }

//     setStartYConduction(newY);
//   };

//   const endDragConduction = () => {
//     setIsDraggingConduction(false);
//   };

//   const checkMaterialType = () => {
//     if (bandGap >= 3) {
//       setMaterialType("Insulator");
//     } else if (bandGap === 0) {
//       setMaterialType("Metal");
//     } else {
//       setMaterialType("Semiconductor");
//     }
//   };

//   return (
//     <div id="container" className="container">
//       <animated.div
//         id="conductionBand"
//         className="band conduction-band"
//         style={conductionBandStyle}
//         onMouseDown={startDragConduction}
//         onTouchStart={startDragConduction}
//         onMouseMove={dragConduction}
//         onTouchMove={dragConduction}
//         onMouseUp={endDragConduction}
//         onTouchEnd={endDragConduction}
//       >
//         <div className="band-label">Conduction Band</div>
//       </animated.div>
//       <div id="valenceBand" className="band valence-band">
//         <div className="band-label">Valence Band</div>
//       </div>
//       <div
//         className="band-gap-slider"
//         style={{ bottom: `${bandGap * 10}%` }}
//       ></div>
//       <label>
//         Band Gap:
//         <input
//           type="range"
//           min="0"
//           max="3"
//           step="0.1"
//           value={bandGap}
//           onChange={handleBandGapChange}
//         />
//         {bandGap}
//       </label>
//       <div className="material-type">Material Type: {materialType}</div>
//     </div>
//   );
// };

// export default Lab1;
