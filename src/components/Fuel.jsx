import { Box, TextField } from "@mui/material";

export default function Fuel({ onInputChange }) {
	return (
		<Box
			id="Fuel"
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
			}}
		>
			<TextField
				label="Fuel efficiency (km/liter)"
				name="fuelEfficiency"
				onChange={onInputChange}
			></TextField>
			<TextField
				label="Fuel price (kr/liter)"
				name="fuelPrice"
				onChange={onInputChange}
			></TextField>
		</Box>
	);
}
