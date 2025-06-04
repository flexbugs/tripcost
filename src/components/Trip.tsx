import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { TFormData, TValidationErrors, TChangeEvent } from "../types";

type TripProps = {
	formData: TFormData;
	onInputChange: TChangeEvent;
	validationErrors: TValidationErrors;
};

export default function Trip({
	formData,
	onInputChange,
	validationErrors,
}: TripProps) {
	return (
		<Box
			id="Trip"
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
			}}
		>
			<TextField
				aria-required
				label="Trip distance (km) *"
				name="distance"
				value={formData.distance}
				onChange={onInputChange}
				error={!!validationErrors.distance}
				helperText={validationErrors.distance}
				slotProps={{
					htmlInput: {
						type: "text",
						inputMode: "numeric",
						pattern: "[0-9]*",
					},
				}}
			></TextField>
			<FormControlLabel
				control={
					<Checkbox
						name="twoWayTrip"
						checked={formData.twoWayTrip}
						onChange={onInputChange}
					></Checkbox>
				}
				label="Two-way trip"
			></FormControlLabel>
		</Box>
	);
}
