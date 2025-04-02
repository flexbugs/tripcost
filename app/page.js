"use client";

import { Box, FormControlLabel, Checkbox, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Home() {
  const [distance, setDistance] = useState(0);
  const [twoWayTrip, setTwoWayTrip] = useState(false);
  const [fuelEfficency, setfuelEfficency] = useState(0);
  const [fuelPrice, setfuelPrice] = useState(0);
  const [price, setPrice] = useState(0);

  function handleOnDistanceChange(value) {
    setDistance(value);
  }

  function handleTwoWayTripChange(event) {
    setTwoWayTrip(event.target.checked);
  }

  function handleFuelEfficiencyChange(value) {
    setfuelEfficency(value);
  }

  function handleFuelPriceChange(value) {
    setfuelPrice(value);
  }

  function handleCalcPrice() {
    setPrice(
      twoWayTrip
        ? 2 * (distance / fuelEfficency) * fuelPrice
        : (distance / fuelEfficency) * fuelPrice
    );
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
          onDistanceChange={handleOnDistanceChange}
          checked={twoWayTrip}
          onTwoWayTripChange={handleTwoWayTripChange}
        />
        <Fuel
          onFuelEfficiencyChange={handleFuelEfficiencyChange}
          onFuelPriceChange={handleFuelPriceChange}
        ></Fuel>
        <CalcPriceButton onCalcPrice={handleCalcPrice} />
        <Box id="price" sx={{ height: 100 }}>
          {price} DKK
        </Box>
      </Box>
    </Box>
  );
}

function Fuel({ onFuelEfficiencyChange, onFuelPriceChange }) {
  return (
    <Box id="fuel">
      <TextField
        label="Fuel efficiency (km/liter)"
        onChange={(e) => {
          onFuelEfficiencyChange(e.target.value);
        }}
        slotProps={{ htmlInput: { type: "number" } }}
      ></TextField>

      <TextField
        label="Fuel price (kr/liter)"
        onChange={(e) => {
          onFuelPriceChange(e.target.value);
        }}
        slotProps={{ htmlInput: { type: "number" } }}
      ></TextField>
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
