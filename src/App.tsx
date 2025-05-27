import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import CalcPriceButton from "./components/CalcPriceButton";
import Trip from "./components/Trip";
import Fuel from "./components/Fuel";
import Price from "./components/Price";
import {
	TFormData,
	TFuelData,
	TValidationErrors,
	TPrice,
	TChangeEvent,
	TApiError,
	TSelectedFuelTypes,
} from "./types";

export default function App() {
	const [fuelData, setFuelData] = useState<TFuelData | null>(null);
	const [formData, setFormData] = useState<TFormData>({
		distance: "",
		twoWayTrip: false,
		fuelEfficiency: "",
		fuelPrice: "",
	});
	const [validationErrors, setValidationErrors] = useState<TValidationErrors>(
		{}
	);
	const [apiError, setApiError] = useState<TApiError>(null);
	const [selectedFuelType, setSelectedFuelType] =
		useState<TSelectedFuelTypes>("Blyfri 95");
	const [price, setPrice] = useState<TPrice>(0);

	useEffect(() => {
		const fetchFuelPrices = async () => {
			try {
				const response = await fetch("http://localhost:3000/api/fuel-prices");
				if (response.ok) {
					const data = await response.json();
					setFuelData(data);
				}
			} catch (err) {
				console.log("Error: Fetching error");
				setApiError("Could not get API fuel prices. Set price manually.");
			}
		};

		fetchFuelPrices();
	}, []);

	const handleInputChange: TChangeEvent = (e) => {
		const { name, type, value, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value, // handle both checkbox and field inputs
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const distance = parseFloat(formData.distance);
		const fuelEfficiency = parseFloat(formData.fuelEfficiency);
		const fuelPrice = parseFloat(formData.fuelPrice);

		const newErrors: TValidationErrors = {};

		if (!formData.distance) {
			newErrors.distance = "Please set a distance";
		} else if (isNaN(distance)) {
			newErrors.distance = "Must be a number";
		} else if (distance < 1) {
			newErrors.distance = "Must be at least 1";
		}

		if (!formData.fuelEfficiency) {
			newErrors.fuelEfficiency = "Please set fuel efficiency";
		} else if (isNaN(fuelEfficiency)) {
			newErrors.fuelEfficiency = "Must be a number";
		} else if (fuelEfficiency < 1) {
			newErrors.fuelEfficiency = "Must be at least 1";
		}

		if (!formData.fuelPrice) {
			newErrors.fuelPrice = "Please set fuel price";
		} else if (isNaN(fuelPrice)) {
			newErrors.fuelPrice = "Must be a number";
		} else if (fuelPrice < 1) {
			newErrors.fuelPrice = "Must be at least 1";
		}

		if (Object.keys(newErrors).length > 0) {
			setValidationErrors(newErrors);
			setPrice("Error!");
			return;
		}

		setValidationErrors({});

		const basePrice = (distance / fuelEfficiency) * fuelPrice;
		const tripPrice = parseFloat(basePrice.toFixed(2));
		setPrice(formData.twoWayTrip ? 2 * tripPrice : tripPrice);
	};

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
				<form onSubmit={handleSubmit} noValidate>
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
							validationErrors={validationErrors}
						/>
						<Fuel
							apiError={apiError}
							formData={formData}
							fuelData={fuelData}
							onInputChange={handleInputChange}
							validationErrors={validationErrors}
							selectedFuelType={selectedFuelType}
							onSelectFuelType={setSelectedFuelType}
						/>
						<CalcPriceButton />
					</Box>
				</form>
				<Price price={price} />
			</Container>
		</>
	);
}
