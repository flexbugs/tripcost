"use client";

import { Box, FormControlLabel, Checkbox, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";

export default function Home() {
	const [distance, setDistance] = useState(0);
	const [twoWayTrip, setTwoWayTrip] = useState(false);
	const [fuelEfficency, setfuelEfficency] = useState(0);
	const [fuelPrice, setfuelPrice] = useState(0);
	const [price, setPrice] = useState(0);

	function handleOnDistanceChange(value) {
		setDistance(value);
	}

	function handleTwoWayTripChange(event) {
		setTwoWayTrip(event.target.checked);
	}

	function handleFuelEfficiencyChange(value) {
		setfuelEfficency(value);
	}

	function handleFuelPriceChange(value) {
		setfuelPrice(value);
	}

	function handleSubmit() {
		/* 
		Check if all fields are filled and have valid values (all filled)
		(distance, fuel efficiency, fuel price: 1 or higher value)
		If they are, display result.
		If not: 
		display error snackbar and
		display error on erroneous fields
		*/
	}

	function handleCalcPrice() {
		const tripPrice = Number((distance / fuelEfficency) * fuelPrice).toFixed(2);

		setPrice(twoWayTrip ? 2 * tripPrice : tripPrice);
	}

	return (
		<>
			<Box id="inner-container" className="col">
				<h1>TripCost</h1>
				<form onSubmit={handleSubmit}>
					<Trip
						onDistanceChange={handleOnDistanceChange}
						checked={twoWayTrip}
						onTwoWayTripChange={handleTwoWayTripChange}
					/>
					<Fuel
						onFuelEfficiencyChange={handleFuelEfficiencyChange}
						onFuelPriceChange={handleFuelPriceChange}
					/>
					<CalcPriceButton onCalcPrice={handleCalcPrice} />
				</form>
				<Box id="price" sx={{ height: 100 }}>
					{price} DKK
				</Box>
				<Snackbar message="Snackbar text" open="true"></Snackbar>
			</Box>
		</>
	);
}

function Fuel({ onFuelEfficiencyChange, onFuelPriceChange }) {
	return (
		<Box id="fuel" className="col">
			<TextField
				label="Fuel efficiency (km/liter)"
				onChange={(e) => {
					onFuelEfficiencyChange(e.target.value);
				}}
				slotProps={{ htmlInput: { type: "number" } }}
				required
			></TextField>
			<TextField
				label="Fuel price (kr/liter)"
				onChange={(e) => {
					onFuelPriceChange(e.target.value);
				}}
				slotProps={{ htmlInput: { type: "number" } }}
				required
			></TextField>
		</Box>
	);
}

function Trip({ onDistanceChange, twoWayTrip, onTwoWayTripChange }) {
	return (
		<Box id="trip" className="col">
			<TextField
				label="Trip distance (km)"
				onChange={(e) => {
					onDistanceChange(e.target.value);
				}}
				slotProps={{ htmlInput: { type: "number" } }}
				required
			></TextField>

			<FormControlLabel
				control={
					<Checkbox
						checked={twoWayTrip}
						onChange={onTwoWayTripChange}
					></Checkbox>
				}
				label="Two-way trip"
			></FormControlLabel>
		</Box>
	);
}

function CalcPriceButton({ onCalcPrice }) {
	return (
		<Button
			type="submit"
			variant="contained"
			size="large"
			onClick={onCalcPrice}
		>
			Calculate price
		</Button>
	);
}
