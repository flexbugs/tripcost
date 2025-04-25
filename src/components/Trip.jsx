import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";

export default function Trip({ formData, onInputChange }) {
	return (
		<Box
			id="Trip"
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
			}}
		>
			<TextField
				label="Trip distance"
				name="distance"
				onChange={onInputChange}
			></TextField>
			<FormControlLabel
				control={
					<Checkbox
						name="twoWayTrip"
						checked={formData.twoWayTrip}
						onChange={onInputChange}
					></Checkbox>
				}
				label="Two-way trip"
			></FormControlLabel>
		</Box>
	);
}
