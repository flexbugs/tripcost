import React from "react";
import { Box, TextField } from "@mui/material";
import { TFormData, TValidationErrors, TChangeEvent } from "../types";

type FuelProps = {
	onInputChange: TChangeEvent;
	formData: TFormData;
	validationErrors: TValidationErrors;
};

export default function Fuel({
	formData,
	onInputChange,
	validationErrors,
}: FuelProps) {
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
				error={!!validationErrors.fuelEfficiency}
				helperText={validationErrors.fuelEfficiency}
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
				error={!!validationErrors.fuelPrice}
				helperText={validationErrors.fuelPrice}
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
