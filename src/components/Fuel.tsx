import React from "react";
import { Box, TextField } from "@mui/material";
import { FormData, ChangeEvent } from "../types";

type FuelProps = {
	onInputChange: ChangeEvent;
	formData: FormData;
};

export default function Fuel({ formData, onInputChange }: FuelProps) {
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
				label="Fuel efficiency (km/liter)"
				name="fuelEfficiency"
				value={formData.fuelEfficiency}
				onChange={onInputChange}
			></TextField>
			<TextField
				label="Fuel price (kr/liter)"
				name="fuelPrice"
				value={formData.fuelPrice}
				onChange={onInputChange}
			></TextField>
		</Box>
	);
}
