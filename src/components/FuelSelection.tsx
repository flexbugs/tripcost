import { CircularProgress, TextField, Typography } from "@mui/material";
import FieldCustomFuelPrice from "./FieldCustomFuelPrice";
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
				<FieldCustomFuelPrice
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
			) : (
				// Price is from API: Display price data
				<Typography>
					{selectedFuelType}
					<br />
					{fuelData?.prices[selectedFuelType]} kr/liter
					<br />
					Kilde: Mock API. Opdateret: {fuelData?.date}
				</Typography>
			)}
		</>
	);
}
