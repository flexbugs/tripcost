import React from "react";
import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { FormData, Errors, ChangeEvent } from "../types";

type TripProps = {
	formData: FormData;
	onInputChange: ChangeEvent;
	errors: Errors;
};

export default function Trip({ formData, onInputChange, errors }: TripProps) {
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
				aria-required
				label="Trip distance (km) *"
				name="distance"
				value={formData.distance}
				onChange={onInputChange}
				error={!!errors.distance}
				helperText={errors.distance}
				slotProps={{
					htmlInput: {
						type: "text",
						inputMode: "numeric",
						pattern: "[0-9]*",
					},
				}}
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
