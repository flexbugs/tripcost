import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { TFormData, TValidationErrors, TChangeEvent } from "../types";
import CustomTextField from "./CustomTextField";

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
			<CustomTextField
				name="tripDistance"
				label="Trip distance (km) *"
				formData={formData}
				onInputChange={onInputChange}
				validationErrors={validationErrors}
			/>
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
