import React from "react";
import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import CalcPriceButton from "./components/CalcPriceButton";
import Trip from "./components/Trip";
import Fuel from "./components/Fuel";
import Price from "./components/Price";
import { FormData, ChangeEvent } from "./types";

export default function App() {
	const [formData, setFormData] = useState<FormData>({
		distance: "",
		twoWayTrip: false,
		fuelEfficiency: "",
		fuelPrice: "",
	});
	const [price, setPrice] = useState(0);

	const handleInputChange: ChangeEvent = (e) => {
		const { name, type, value, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value, // handle both checkbox and field inputs
		});
	};

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		const distance = Number(formData.distance);
		const fuelEfficiency = Number(formData.fuelEfficiency);
		const fuelPrice = Number(formData.fuelPrice);

		const tripPrice = parseFloat(
			((distance / fuelEfficiency) * fuelPrice).toFixed(2)
		);

		setPrice(formData.twoWayTrip ? 2 * tripPrice : tripPrice);
	}

	return (
		<>
			<Container
				id="outer-container"
				maxWidth="sm"
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 4,
					padding: 5,
				}}
			>
				<Typography variant="h3" align="center">
					TripCost
				</Typography>
				<form onSubmit={handleSubmit}>
					<Box
						id="inner-container"
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 4,
						}}
					>
						<Trip formData={formData} onInputChange={handleInputChange} />
						<Fuel formData={formData} onInputChange={handleInputChange} />
						<CalcPriceButton />
					</Box>
				</form>
				<Price price={price} />
			</Container>
		</>
	);
}
