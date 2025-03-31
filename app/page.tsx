import { Switch, TextField, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

function Logo() {
  return (
    <Box
      id="logo"
      sx={{
        display: "flex",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "lightgrey",
      }}
    >
      Logo placeholder
    </Box>
  );
}

function Controls() {
  return (
    <Box
      id="controls"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Box
        id="trip-distance"
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        <TextField
          label="Trip distance (km)"
          slotProps={{ htmlInput: { type: "number" } }}
        ></TextField>
        <FormControlLabel control={<Switch />} label="Two-way trip" />
      </Box>
    </Box>
  );
}

function Fuel() {
  return (
    <Box id="fuel" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Km/liter"
        slotProps={{ htmlInput: { type: "number" } }}
      ></TextField>
      <TextField
        label="Fuel price (kr/liter)"
        slotProps={{ htmlInput: { type: "number" } }}
      ></TextField>
    </Box>
  );
}

function Price() {
  return (
    <Box
      id="price"
      sx={{
        display: "flex",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      [PRICE] DKK
    </Box>
  );
}

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, margin: 2.5 }}>
      <>
        <Logo />
        <Controls />
        <Fuel />
        <Button variant="contained">Calculate cost</Button>
        <Price />
      </>
    </Box>
  );
}
