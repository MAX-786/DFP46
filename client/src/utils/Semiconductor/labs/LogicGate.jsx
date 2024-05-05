
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";
import VideoURL from "../../../assets/Semiconductor/LogicGate.mp4";
import {
  or_gate_symbol,
  and_gate_symbol,
  not_gate_symbol,
  nand_gate_symbol,
  nor_gate_symbol,
} from "/src/assets/Semiconductor/index.js";

const Lab10 = () => {
  const [inputs, setInputs] = useState(["", ""]);
  const [output, setOutput] = useState("");
  const [gateType, setGateType] = useState("NOT");
  const [showTruthTable, setShowTruthTable] = useState(false);
  const [showSymbol, setShowSymbol] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const calculateOutput = () => {
    switch (gateType) {
      case "NOT":
        setOutput(parseInt(inputs[0], 2) === 0 ? "1" : "0");
        break;
      case "OR":
        setOutput(inputs.includes("1") ? "1" : "0");
        break;
      case "AND":
        setOutput(inputs.every((input) => parseInt(input, 2) === 1) ? "1" : "0");
        break;
      case "NAND":
        setOutput(inputs.includes("0") ? "1" : "0");
        break;
      case "NOR":
        setOutput(inputs.every((input) => parseInt(input, 2) === 0) ? "1" : "0");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (gateType === "NOT" && inputs[0] !== "") {
      calculateOutput();
    } else if (gateType !== "NOT" && inputs.every((input) => input !== "")) {
      calculateOutput();
    } else {
      setOutput("");
    }
  }, [gateType, inputs]);

  // const handleInputChange = (value, index) => {
  //   if (/^[01]*$/.test(value)) {
  //     const newInputs = [...inputs];
  //     newInputs[index] = value;
  //     setInputs(newInputs);
  //   }
  // };
    const handleInputChange = (value, index) => {
      if (/^[01]{0,1}$/.test(value)) {
        // Allow only 0 or 1 with maximum length of 1
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
      }
    };

  const handleGateTypeChange = (type) => {
    setShowVideo(false);
    setGateType(type);
    setShowForm(true);
    setInputs(["", ""]);
    setOutput("");
    setShowTruthTable(false);
    setShowSymbol(false);
  };

  const toggleTruthTable = () => {
    setShowTruthTable(!showTruthTable);
    setShowSymbol(false);
    setShowForm(false);
  };

  const toggleSymbol = () => {
    setShowSymbol(!showSymbol);
    setShowTruthTable(false);
    setShowForm(false);
  };

      const generateTruthTable = (gateType) => {
        const truthTable = [];
        if (gateType === "NOT") {
          truthTable.push([0, 1]);
          truthTable.push([1, 0]);
        } else {
          for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
              if (gateType === "OR") {
                truthTable.push([i, j, i || j]);
              } else if (gateType === "AND") {
                truthTable.push([i, j, i & j]);
              } else if (gateType === "NAND") {
                truthTable.push([i, j, !(i & j) ? 1 : 0]);
              } else if (gateType === "NOR") {
                truthTable.push([i, j, !(i | j) ? 1 : 0]);
              }
            }
          }
        }
        return truthTable;
      };

      const renderTruthTable = (gateType) => {
        const truthTable = generateTruthTable(gateType);
        return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Input A</TableCell>
                  {gateType !== "NOT" && <TableCell>Input B</TableCell>}
                  <TableCell>Output</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {truthTable.map((row, index) => (
                  <TableRow key={index}>
                    {row.map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      };

      const renderGateSymbol = (gateType) => {
        let symbolImage = "";
        switch (gateType) {
          case "NOT":
            symbolImage = not_gate_symbol;
            break;
          case "OR":
            symbolImage = or_gate_symbol;
            break;
          case "AND":
            symbolImage = and_gate_symbol;
            break;
          case "NAND":
            symbolImage = nand_gate_symbol;
            break;
          case "NOR":
            symbolImage = nor_gate_symbol;
            break;
          default:
            break;
        }
        return <img src={symbolImage} alt={`${gateType} Gate Symbol`} />;
      };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={9}>
          {showTruthTable && (
            <Paper>
              <Typography variant="h5" align={"center"}>
                {gateType} Gate
              </Typography>
              <Typography variant="h6">Truth Table</Typography>
              {renderTruthTable(gateType)}
            </Paper>
          )}
          {showSymbol && (
            <Paper>
              <Typography variant="h5" align={"center"}>
                {gateType} Gate
              </Typography>
              <Typography variant="h6">Symbol</Typography>
              {renderGateSymbol(gateType)}
            </Paper>
          )}
          {showVideo && (
            <ReactPlayer
              url={VideoURL}
              controls
              playing
              width={"100%"}
              height={"100%"}
            />
          )}
          {showForm && (
            <Paper>
              <Typography variant="h5" align={"center"}>
                {gateType} Gate
              </Typography>
              <Typography variant="h6">Enter Inputs</Typography>
              <TextField
                label="Input A"
                variant="outlined"
                value={inputs[0] || ""}
                onChange={(e) => handleInputChange(e.target.value, 0)}
                fullWidth
                margin="normal"
              />
              {gateType !== "NOT" && (
                <TextField
                  label="Input B"
                  variant="outlined"
                  value={inputs[1] || ""}
                  onChange={(e) => handleInputChange(e.target.value, 1)}
                  fullWidth
                  margin="normal"
                />
              )}
              {(gateType === "NOT" && inputs[0] !== "") ||
              (gateType !== "NOT" && inputs.every((input) => input !== "")) ? (
                <TextField
                  label="Output Y"
                  variant="outlined"
                  value={output === "" ? null : output}
                  disabled
                  fullWidth
                  margin="normal"
                />
              ) : null}
            </Paper>
          )}
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack spacing={1} direction="column">
            <Typography>Select logic gate:</Typography>
            <Button
              variant="contained"
              onClick={() => handleGateTypeChange("NOT")}
            >
              NOT Gate
            </Button>
            <Button
              variant="contained"
              onClick={() => handleGateTypeChange("OR")}
            >
              OR Gate
            </Button>
            <Button
              variant="contained"
              onClick={() => handleGateTypeChange("NOR")}
            >
              NOR Gate
            </Button>
            <Button
              variant="contained"
              onClick={() => handleGateTypeChange("AND")}
            >
              AND Gate
            </Button>
            <Button
              variant="contained"
              onClick={() => handleGateTypeChange("NAND")}
            >
              NAND Gate
            </Button>
            <Box mt={2} />
            <Typography>Output:</Typography>
            <Button
              variant="contained"
              onClick={toggleTruthTable}
              color="success"
            >
              Show Truth Table
            </Button>
            <Button variant="contained" color="success" onClick={toggleSymbol}>
              Show Symbol
            </Button>
            <Box mt={2} />
            <Typography>Revise?</Typography>
            <Button
              variant="contained"
              onClick={() => {
                setShowVideo(!showVideo);
                setShowTruthTable(false);
                setShowSymbol(false);
                setShowForm(false);
              }}
            >
              Learn
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Lab10;
