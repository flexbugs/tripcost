import React from "react";
import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import CalcPriceButton from "./components/CalcPriceButton";
import Trip from "./components/Trip";
import Fuel from "./components/Fuel";
import Price from "./components/Price";
import { FormData, Errors, ChangeEvent } from "./types";

export default function App() {
	const [formData, setFormData] = useState<FormData>({
		distance: "",
		twoWayTrip: false,
		fuelEfficiency: "",
		fuelPrice: "",
	});
	const [errors, setErrors] = useState<Errors>({});
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

		const newErrors: Errors = {};

		if (!distance) {
			newErrors.distance = "Please set trip distance";
		} else if (distance < 1) {
			newErrors.distance = "Must be at least 1";
		}

		if (!fuelEfficiency) {
			newErrors.fuelEfficiency = "Please set fuel efficiency";
		} else if (fuelEfficiency < 1) {
			newErrors.fuelEfficiency = "Must be at least 1";
		}

		if (!fuelPrice) {
			newErrors.fuelPrice = "Please set fuel price";
		} else if (fuelPrice < 1) {
			newErrors.fuelPrice = "Must be at least 1";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setErrors({});

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
					</Box>
				</form>
				<Price price={price} />
			</Container>
		</>
	);
}
