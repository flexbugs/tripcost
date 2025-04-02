"use client";

import { Box, FormControlLabel, Switch, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setPrice(twoWayTrip ? distance * 2 : distance);
  }, [distance, twoWayTrip]);

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
        <Button type="submit" variant="contained">
          Submit
        </Button>
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
          <Switch checked={twoWayTrip} onChange={onTwoWayTripChange}></Switch>
        }
        label="Two-way trip"
      ></FormControlLabel>
    </Box>
  );
}
