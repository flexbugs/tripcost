"use client";

import { Box, FormControlLabel, Checkbox, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Home() {
  const [distance, setDistance] = useState(0);
  const [twoWayTrip, setTwoWayTrip] = useState(false);
  const [price, setPrice] = useState(0);

  function handleOnFieldChange(value) {
    setDistance(value);
  }

  function handleTwoWayTripChange(event) {
    setTwoWayTrip(event.target.checked);
  }

  function handleCalcPrice() {
    setPrice(twoWayTrip ? distance * 2 : distance);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        maxWidth: 412,
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Box
        id="logo"
        sx={{
          height: 100,
          bgcolor: "lightgrey",
        }}
      >
        Logo
      </Box>
      <Box
        id="content"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Trip
          onDistanceChange={handleOnFieldChange}
          checked={twoWayTrip}
          onTwoWayTripChange={handleTwoWayTripChange}
        />
        <CalcPriceButton onCalcPrice={handleCalcPrice} />
        <Box id="price" sx={{ height: 100 }}>
          {price} DKK
        </Box>
      </Box>
    </Box>
  );
}

function Trip({ onDistanceChange, twoWayTrip, onTwoWayTripChange }) {
  return (
    <Box id="trip">
      <TextField
        label="Trip distance (km)"
        onChange={(e) => {
          onDistanceChange(e.target.value);
        }}
        slotProps={{ htmlInput: { type: "number" } }}
      ></TextField>
      <FormControlLabel
        control={
          <Checkbox
            checked={twoWayTrip}
            onChange={onTwoWayTripChange}
          ></Checkbox>
        }
        label="Two-way trip"
      ></FormControlLabel>
    </Box>
  );
}

function CalcPriceButton({ onCalcPrice }) {
  return (
    <Button variant="contained" onClick={onCalcPrice}>
      Calculate price
    </Button>
  );
}
