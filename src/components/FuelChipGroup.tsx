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
	const custom = "Custom";

	return (
		<Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
			{/* Fuel options from API */}
			{Object.entries(prices).map(([fuelType]) => (
				<Chip
					key={fuelType}
					label={fuelType}
					variant={selectedFuelType === fuelType ? "filled" : "outlined"}
					color={selectedFuelType === fuelType ? "primary" : "default"}
					clickable={true}
					onClick={() => onSelectFuelType(fuelType as TSelectedFuelTypes)}
				/>
			))}
			{/* Custom input option */}
			<Chip
				key={custom}
				label={custom}
				variant={selectedFuelType === custom ? "filled" : "outlined"}
				color={selectedFuelType === custom ? "primary" : "default"}
				onClick={() => onSelectFuelType(custom)}
			/>
		</Box>
	);
}
