"use client";

import { Box, FormControlLabel, Checkbox, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";

export default function Home() {
	const [formData, setFormData] = useState({
		distance: "",
		twoWayTrip: false,
		fuelEfficiency: "",
		fuelPrice: "",
	});
	const [price, setPrice] = useState(0);

	function handleInputChange(e) {
		const { name, type, value, checked } = e.target;
		setFormData({
			...formData,
			// handle both checkbox and field inputs
			[name]: type === "checkbox" ? checked : value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		/* 
		Check if all fields are filled and have valid values (all filled)
		(distance, fuel efficiency, fuel price: 1 or higher value)
		If not: 
		display error snackbar and
		display error on erroneous fields
		*/
		const tripPrice = Number(
			(formData.distance / formData.fuelEfficiency) * formData.fuelPrice
		).toFixed(2);

		setPrice(formData.twoWayTrip ? 2 * tripPrice : tripPrice);
	}

	return (
		<>
			<Box id="inner-container" className="col">
				<h1>TripCost</h1>
				<form onSubmit={handleSubmit}>
					<Trip formData={formData} onInputChange={handleInputChange} />
					<Fuel onInputChange={handleInputChange} />
					<CalcPriceButton onSubmit={handleSubmit} />
				</form>
				<Box id="price" sx={{ height: 100 }}>
					{price} DKK
				</Box>
				<Snackbar message="Snackbar text" open="true"></Snackbar>
			</Box>
		</>
	);
}

function Trip({ formData, onInputChange }) {
	return (
		<Box id="trip" className="col">
			<TextField
				label="Trip distance (km)"
				name="distance"
				onChange={onInputChange}
				slotProps={{ htmlInput: { type: "number" } }}
				required
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

function Fuel({ onInputChange }) {
	return (
		<Box id="fuel" className="col">
			<TextField
				label="Fuel efficiency (km/liter)"
				name="fuelEfficiency"
				onChange={onInputChange}
				slotProps={{ htmlInput: { type: "number" } }}
				required
			></TextField>
			<TextField
				label="Fuel price (kr/liter)"
				name="fuelPrice"
				onChange={onInputChange}
				slotProps={{ htmlInput: { type: "number" } }}
				required
			></TextField>
		</Box>
	);
}

function CalcPriceButton() {
	return (
		<Button type="submit" variant="contained" size="large">
			Calculate price
		</Button>
	);
}
