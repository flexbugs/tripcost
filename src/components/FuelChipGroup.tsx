import { Box, Chip } from "@mui/material";
import { TFuelData, TOnSelectFuelType, TSelectedFuelTypes } from "../types";

type FuelChipGroupProps = {
	fuelData: TFuelData | null;
	selectedFuelType: TSelectedFuelTypes;
	onSelectFuelType: TOnSelectFuelType;
};

export default function FuelChipGroup({
	fuelData,
	selectedFuelType,
	onSelectFuelType,
}: FuelChipGroupProps) {
	if (!fuelData) return null;

	const prices = fuelData.prices;

	return (
		<Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
			{/* Fuel options from API */}
			{Object.entries(prices).map(([fuelType]) => (
				<Chip
					key={fuelType}
					label={fuelType}
					clickable={true}
					onClick={() => onSelectFuelType(fuelType as TSelectedFuelTypes)}
				/>
			))}
			{/* Custom input option */}
			<Chip
				key="Custom"
				label="Custom"
				onClick={() => onSelectFuelType("Custom")}
			/>
		</Box>
	);
}
