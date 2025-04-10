"use client";

import { Box, FormControlLabel, Checkbox, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Home() {
	const [formData, setFormData] = useState({
		distance: "",
		twoWayTrip: false,
		fuelEfficiency: "",
		fuelPrice: "",
	});
	const [errors, setErrors] = useState({});
	const [price, setPrice] = useState(0);

	function handleInputChange(e) {
		const { name, type, value, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value, // handle both checkbox and field inputs
		});
	}

	function handleSubmit(e) {
		e.preventDefault();

		const newErrors = {};

		if (!formData.distance) {
			newErrors.distance = "Please fill out this field";
		} else if (formData.distance < 1) {
			newErrors.distance = "Must be 1 or higher";
		}
		if (!formData.fuelEfficiency) {
			newErrors.fuelEfficiency = "Please fill out this field";
		} else if (formData.fuelEfficiency < 1) {
			newErrors.fuelEfficiency = "Must be 1 or higher";
		}
		if (!formData.fuelPrice) {
			newErrors.fuelPrice = "Please fill out this field";
		} else if (formData.fuelPrice < 1) {
			newErrors.fuelPrice = "Must be 1 or higher";
		}

		// Set errors and stop if any
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setErrors({}); // Clear any old errors

		const tripPrice = Number(
			(formData.distance / formData.fuelEfficiency) * formData.fuelPrice
		).toFixed(2);

		setPrice(formData.twoWayTrip ? 2 * tripPrice : tripPrice);
	}

	return (
		<>
			<Box id="inner-container" className="col">
				<h1>TripCost</h1>
				<form onSubmit={handleSubmit} noValidate className="col">
					<Trip
						formData={formData}
						onInputChange={handleInputChange}
						errors={errors}
					/>
					<Fuel
						formData={formData}
						onInputChange={handleInputChange}
						errors={errors}
					/>
					<CalcPriceButton />
				</form>
				<Box id="price" sx={{ height: 100 }}>
					{price} DKK
				</Box>
			</Box>
		</>
	);
}

function Trip({ formData, onInputChange, errors }) {
	return (
		<Box id="trip" className="col">
			<TextField
				label="Trip distance (km)"
				name="distance"
				onChange={onInputChange}
				slotProps={{ htmlInput: { type: "number" } }}
				required
				error={!!errors.distance}
				helperText={errors.distance}
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

function Fuel({ onInputChange, errors }) {
	return (
		<Box id="fuel" className="col">
			<TextField
				label="Fuel efficiency (km/liter)"
				name="fuelEfficiency"
				onChange={onInputChange}
				slotProps={{ htmlInput: { type: "number" } }}
				required
				error={!!errors.fuelEfficiency}
				helperText={errors.fuelEfficiency}
			></TextField>
			<TextField
				label="Fuel price (kr/liter)"
				name="fuelPrice"
				onChange={onInputChange}
				slotProps={{ htmlInput: { type: "number" } }}
				required
				error={!!errors.fuelPrice}
				helperText={errors.fuelPrice}
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
