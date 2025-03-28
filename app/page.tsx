import { Switch, TextField, FormControlLabel } from "@mui/material";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <div id="logo">Logo</div>
      <div id="controls">
        <div id="trip-distance">
          <TextField label="Trip distance (km)"></TextField>
          <FormControlLabel control={<Switch />} label="Two-way trip" />
        </div>
        <TextField label="Km/liter"></TextField>
        <TextField label="Fuel price (kr/liter)"></TextField>
        <Button variant="contained">Calculate cost</Button>
        <div id="price">156 DKK</div>
      </div>
    </div>
  );
}
