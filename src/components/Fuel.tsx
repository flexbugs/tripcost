import { Box } from "@mui/material";
import {
	TFormData,
	TFuelData,
	TValidationErrors,
	TChangeEvent,
	TApiError,
	TSelectedFuelTypes,
	TOnSelectFuelType,
} from "../types";
import FuelSelection from "./FuelSelection";
import CustomTextField from "./CustomTextField";

type FuelProps = {
	apiError: TApiError;
	formData: TFormData;
	fuelData: TFuelData | null;
	onInputChange: TChangeEvent;
	validationErrors: TValidationErrors;
	selectedFuelType: TSelectedFuelTypes;
	onSelectFuelType: TOnSelectFuelType;
};

export default function Fuel({
	apiError,
	formData,
	fuelData,
	onInputChange,
	validationErrors,
	selectedFuelType,
	onSelectFuelType,
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
			<CustomTextField
				name="fuelEfficiency"
				label="Fuel efficiency (km/liter) *"
				formData={formData}
				onInputChange={onInputChange}
				validationErrors={validationErrors}
			/>

			<FuelSelection
				fuelData={fuelData}
				apiError={apiError}
				formData={formData}
				onInputChange={onInputChange}
				validationErrors={validationErrors}
				selectedFuelType={selectedFuelType}
				onSelectFuelType={onSelectFuelType}
			/>
		</Box>
	);
}
