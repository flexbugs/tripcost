import { Box, TextField } from "@mui/material";

export default function Fuel() {
	return (
		<Box
			id="Fuel"
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
			}}
		>
			<TextField label="Fuel efficiency (km/liter)"></TextField>
			<TextField label="Fuel price (kr/liter)"></TextField>
		</Box>
	);
}
