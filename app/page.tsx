import { Switch, TextField, FormControlLabel } from "@mui/material";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <div id="logo">Logo</div>
      <div id="controls">
        <div id="trip-distance">
          <TextField
            label="Trip distance (km)"
            slotProps={{ htmlInput: { type: "number" } }}
          ></TextField>
          <FormControlLabel control={<Switch />} label="Two-way trip" />
        </div>
        <TextField
          label="Km/liter"
          slotProps={{ htmlInput: { type: "number" } }}
        ></TextField>
        <TextField
          label="Fuel price (kr/liter)"
          slotProps={{ htmlInput: { type: "number" } }}
        ></TextField>
        <Button variant="contained">Calculate cost</Button>
      </div>
      <div id="price">156 DKK</div>
    </>
  );
}
