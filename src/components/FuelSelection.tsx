import { CircularProgress, Typography } from "@mui/material";
import {
	TApiError,
	TFormData,
	TFuelData,
	TChangeEvent,
	TValidationErrors,
	TSelectedFuelTypes,
	TOnSelectFuelType,
} from "../types";
import FuelChipGroup from "./FuelChipGroup";
import CustomTextField from "./CustomTextField";

type FuelSelectionProps = {
	apiError: TApiError;
	formData: TFormData;
	fuelData: TFuelData | null;
	onInputChange: TChangeEvent;
	validationErrors: TValidationErrors;
	selectedFuelType: TSelectedFuelTypes;
	onSelectFuelType: TOnSelectFuelType;
};

export default function FuelSelection({
	fuelData,
	apiError,
	formData,
	onInputChange,
	validationErrors,
	selectedFuelType,
	onSelectFuelType,
}: FuelSelectionProps) {
	// Loading view
	if (fuelData === null && apiError === null) {
		return <CircularProgress />;
	}

	// API error view
	if (apiError !== null) {
		return (
			<>
				<Typography color="error">{apiError}</Typography>
				<CustomTextField
					name="fuelPrice"
					label="Fuel price (kr/liter) *"
					formData={formData}
					onInputChange={onInputChange}
					validationErrors={validationErrors}
				/>
			</>
		);
	}

	// API price selection/custom input view
	return (
		<>
			<FuelChipGroup
				fuelData={fuelData}
				selectedFuelType={selectedFuelType}
				onSelectFuelType={onSelectFuelType}
			></FuelChipGroup>
			{selectedFuelType === "Custom" ? (
				// User inputs price
				<CustomTextField
					name="fuelPrice"
					label="Fuel price (kr/liter) *"
					formData={formData}
					onInputChange={onInputChange}
					validationErrors={validationErrors}
				/>
			) : (
				// Price is from API: Display price data
				<Typography>
					{selectedFuelType}
					<br />
					{fuelData?.prices[selectedFuelType]} kr/liter
					<br />
					Source: Mock API. Updated: {fuelData?.date}
				</Typography>
			)}
		</>
	);
}
