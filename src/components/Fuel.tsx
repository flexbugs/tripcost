import React from "react";
import { Box, TextField } from "@mui/material";
import {
	TFormData,
	TFuelData,
	TValidationErrors,
	TChangeEvent,
	TApiError,
} from "../types";
import FuelSelection from "./FuelSelection";

type FuelProps = {
	apiError: TApiError;
	formData: TFormData;
	fuelData: TFuelData | null;
	onInputChange: TChangeEvent;
	validationErrors: TValidationErrors;
};

export default function Fuel({
	apiError,
	formData,
	fuelData,
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
			<FuelSelection
				fuelData={fuelData}
				apiError={apiError}
				formData={formData}
				onInputChange={onInputChange}
				validationErrors={validationErrors}
			/>
		</Box>
	);
}
