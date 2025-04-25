import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";

export default function Trip() {
	return (
		<Box
			id="Trip"
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
			}}
		>
			<TextField label="Distance"></TextField>
			<FormControlLabel
				control={<Checkbox></Checkbox>}
				label="Two-way trip"
			></FormControlLabel>
		</Box>
	);
}
