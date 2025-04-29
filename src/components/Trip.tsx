import React from "react";
import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { FormData, ChangeEvent } from "../types";

type TripProps = {
	formData: FormData;
	onInputChange: ChangeEvent;
};

export default function Trip({ formData, onInputChange }: TripProps) {
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
