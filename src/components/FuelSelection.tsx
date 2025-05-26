import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import FieldCustomFuelPrice from "./FieldCustomFuelPrice";
import {
	TApiError,
	TFormData,
	TFuelData,
	TChangeEvent,
	TValidationErrors,
} from "../types";

type FuelSelectionProps = {
	apiError: TApiError;
	formData: TFormData;
	fuelData: TFuelData | null;
	onInputChange: TChangeEvent;
	validationErrors: TValidationErrors;
};

export default function FuelSelection({
	fuelData,
	apiError,
	formData,
	onInputChange,
	validationErrors,
}: FuelSelectionProps) {
	// Loading
	if (fuelData === null && apiError === null) {
		return <CircularProgress />;
	}

	// API error
	if (apiError !== null) {
		return (
			<>
				<Typography color="error">{apiError}</Typography>
				<FieldCustomFuelPrice
					formData={formData}
					onInputChange={onInputChange}
					validationErrors={validationErrors}
				/>
			</>
		);
	}

	// API price selection

	// Custom price selection
}
