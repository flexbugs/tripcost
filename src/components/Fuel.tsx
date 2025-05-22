import { Box, TextField, Chip, Typography, Stack } from "@mui/material";
import { TFormData, TErrors, TChangeEvent, TFuelData } from "../types";

type FuelProps = {
	onInputChange: TChangeEvent;
	formData: TFormData;
	errors: TErrors;
	fuelData?: TFuelData[];
	loading?: boolean;
	apiError?: string | null;
	onFuelTypeChange: (fuelType: string) => void;
};

export default function Fuel({
	formData,
	onInputChange,
	errors,
	fuelData = [],
	loading = false,
	apiError = null,
	onFuelTypeChange,
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
				error={!!errors.fuelEfficiency}
				helperText={errors.fuelEfficiency}
				slotProps={{
					htmlInput: {
						type: "text",
						inputMode: "numeric",
						pattern: "[0-9]*",
					},
				}}
			/>

			<Box>
				<Typography variant="subtitle1" gutterBottom>
					Fuel Type
				</Typography>

				{loading ? (
					<Typography>Loading fuel prices...</Typography>
				) : (
					<Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
						{apiError && (
							<Typography color="error" sx={{ width: "100%", mb: 2 }}>
								API Error: {apiError}
							</Typography>
						)}
						{fuelData.length > 0 ? (
							fuelData.map((fuel) => (
								<Chip
									key={fuel.type}
									label={`${fuel.type} (${fuel.price} kr/l) [API]`}
									onClick={() => onFuelTypeChange(fuel.type)}
									color={
										formData.fuelType === fuel.type ? "primary" : "default"
									}
									variant={
										formData.fuelType === fuel.type ? "filled" : "outlined"
									}
									sx={{ mb: 1 }}
								/>
							))
						) : (
							// Fallback mock data in case API fails
							<>
								<Chip
									key="Blyfri 95"
									label="Blyfri 95 (18.5 kr/l) [Mock]"
									onClick={() => onFuelTypeChange("Blyfri 95")}
									color={
										formData.fuelType === "Blyfri 95" ? "primary" : "default"
									}
									variant={
										formData.fuelType === "Blyfri 95" ? "filled" : "outlined"
									}
									sx={{ mb: 1 }}
								/>
								<Chip
									key="Diesel"
									label="Diesel (16.2 kr/l) [Mock]"
									onClick={() => onFuelTypeChange("Diesel")}
									color={formData.fuelType === "Diesel" ? "primary" : "default"}
									variant={
										formData.fuelType === "Diesel" ? "filled" : "outlined"
									}
									sx={{ mb: 1 }}
								/>
								<Chip
									key="E85"
									label="E85 (14.8 kr/l) [Mock]"
									onClick={() => onFuelTypeChange("E85")}
									color={formData.fuelType === "E85" ? "primary" : "default"}
									variant={formData.fuelType === "E85" ? "filled" : "outlined"}
									sx={{ mb: 1 }}
								/>
							</>
						)}
						<Chip
							label="Manual"
							onClick={() => onFuelTypeChange("Manual")}
							color={formData.fuelType === "Manual" ? "primary" : "default"}
							variant={formData.fuelType === "Manual" ? "filled" : "outlined"}
							sx={{ mb: 1 }}
						/>
					</Stack>
				)}

				{formData.fuelType === "Manual" && (
					<TextField
						aria-required
						label="Fuel price (kr/liter) *"
						name="fuelPrice"
						value={formData.fuelPrice}
						onChange={onInputChange}
						error={!!errors.fuelPrice}
						helperText={errors.fuelPrice}
						sx={{ mt: 2 }}
						slotProps={{
							htmlInput: {
								type: "text",
								inputMode: "numeric",
								pattern: "[0-9]*",
							},
						}}
					/>
				)}
			</Box>
		</Box>
	);
}
