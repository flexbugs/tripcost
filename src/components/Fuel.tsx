import React from "react";
import { Box, TextField } from "@mui/material";
import { ChangeEvent } from "../types";

type FuelProps = {
	onInputChange: ChangeEvent;
};

export default function Fuel({ onInputChange }: FuelProps) {
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
				onChange={onInputChange}
			></TextField>
			<TextField
				label="Fuel price (kr/liter)"
				name="fuelPrice"
				onChange={onInputChange}
			></TextField>
		</Box>
	);
}
