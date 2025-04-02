'use client'

import { Box, Switch, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Home() {
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);

  function handleOnFieldChange(value) {
    setPrice(value);
  }

  function handleOnSwitchChange(event) {
    setChecked(event.target.checked);
  }

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
        <Trip onFieldChange={handleOnFieldChange} checked={checked} onSwitchChange={handleOnSwitchChange}/>
        <Button type="submit" variant="contained">Submit</Button>
        <Box id="price" sx={{ height: 100 }}>{price} DKK</Box>
      </Box>
    </Box>
  );
}

function Trip({ onFieldChange, checked, onSwitchChange }) {
  return (
    <Box id="trip">
      <TextField
        onChange={(e) => {onFieldChange(e.target.value)}}
        label="Trip distance (km)"
        slotProps={{ htmlInput: { type: "number" } }}
      ></TextField>
      <Switch 
        checked={checked}
        onChange={onSwitchChange}
      ></Switch>
    </Box>
  );
}
