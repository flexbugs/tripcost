'use client'

import { Box, Switch, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function Home() {
  const [distance, setDistance] = useState(0);
  const [twoWayTrip, setTwoWayTrip] = useState(false);
  const [price, setPrice] = useState(0);

  function handleOnFieldChange(value) {
    setDistance(value);
  }

  function handleOnSwitchChange(event) {
    setTwoWayTrip(event.target.checked);
  }

  useEffect(() => {
    setPrice(twoWayTrip ? distance * 2 : distance);
  }, [distance, twoWayTrip]);

  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column",
      gap: 2,
      maxWidth: 300,
      justifyContent: "center", 
    }}>
      <Box id="logo" sx={{ 
        height: 100,
        bgcolor: "lightgrey",
        }}>Logo</Box>
      <Box id="content">
        <Trip onFieldChange={handleOnFieldChange} checked={twoWayTrip} onSwitchChange={handleOnSwitchChange}/>
        <Button type="submit" variant="contained">Submit</Button>
        <Box id="price" sx={{ height: 100 }}>{price} DKK</Box>
      </Box>
    </Box>
  );
}

function Trip({ onFieldChange, twoWayTrip, onSwitchChange }) {
  return (
    <Box id="trip">
      <TextField
        onChange={(e) => {onFieldChange(e.target.value)}}
        label="Trip distance (km)"
        slotProps={{ htmlInput: { type: "number" } }}
      ></TextField>
      <Switch 
        checked={twoWayTrip}
        onChange={onSwitchChange}
      ></Switch>
    </Box>
  );
}
