import React from "react";
import { TextField } from "@mui/material";

export default function FieldCustomFuelPrice({
	formData,
	onInputChange,
	validationErrors,
}) {
	return (
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
	);
}
