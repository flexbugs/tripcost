import React from "react";
import { Box, TextField } from "@mui/material";
import { FormData, Errors, ChangeEvent } from "../types";

type FuelProps = {
	onInputChange: ChangeEvent;
	formData: FormData;
	errors: Errors;
};

export default function Fuel({ formData, onInputChange, errors }: FuelProps) {
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
				aria-required
				label="Fuel efficiency (km/liter) *"
				name="fuelEfficiency"
				value={formData.fuelEfficiency}
				onChange={onInputChange}
				error={!!errors.fuelEfficiency}
				helperText={errors.fuelEfficiency}
				slotProps={{
					htmlInput: {
						type: "text",
						inputMode: "numeric",
						pattern: "[0-9]*",
					},
				}}
			></TextField>
			<TextField
				aria-required
				label="Fuel price (kr/liter) *"
				name="fuelPrice"
				value={formData.fuelPrice}
				onChange={onInputChange}
				error={!!errors.fuelPrice}
				helperText={errors.fuelPrice}
				slotProps={{
					htmlInput: {
						type: "text",
						inputMode: "numeric",
						pattern: "[0-9]*",
					},
				}}
			></TextField>
		</Box>
	);
}
