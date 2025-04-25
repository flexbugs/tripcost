import { Box, TextField } from "@mui/material";

export default function Fuel() {
	return (
		<Box id="Fuel">
			<TextField label="Fuel efficiency (km/liter)"></TextField>
			<TextField label="Fuel price (kr/liter)"></TextField>
		</Box>
	);
}
