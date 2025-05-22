import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import CalcPriceButton from "./components/CalcPriceButton";
import Trip from "./components/Trip";
import Fuel from "./components/Fuel";
import Price from "./components/Price";
import { TFormData, TErrors, TPrice, TChangeEvent, TFuelData } from "./types";

export default function App() {
	const [fuelData, setFuelData] = useState<TFuelData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [apiError, setApiError] = useState<string | null>(null);

	const [formData, setFormData] = useState<TFormData>({
		distance: "",
		twoWayTrip: false,
		fuelEfficiency: "",
		fuelType: "Blyfri 95", // Default selection
		fuelPrice: "",
		fuelSource: "api",
	});

	useEffect(() => {
		const fetchFuelPrices = async () => {
			try {
				// For development, use mock data since the API endpoint might not exist
				const mockData = [
					{ type: "Blyfri 95", price: 18.5 },
					{ type: "Diesel", price: 16.2 },
					{ type: "E85", price: 14.8 },
				];

				try {
					const response = await fetch("http://localhost:3000/api/fuel-prices");
					if (response.ok) {
						const data = await response.json();
						setFuelData(data);
					} else {
						// If API fails, use mock data
						setFuelData(mockData);
					}
				} catch (err) {
					// If fetch fails completely, use mock data
					console.log("API fetch failed, using mock data:", err);
					setFuelData(mockData);
					setApiError(err instanceof Error ? err.message : "Unknown error");
				}

				setLoading(false);
			} catch (err) {
				setApiError(err instanceof Error ? err.message : "Unknown error");
				setLoading(false);
			}
		};

		fetchFuelPrices();
	}, []);
	const [validationErrors, setValidationErrors] = useState<TErrors>({});
	const [price, setPrice] = useState<TPrice>(0);

	const handleInputChange: TChangeEvent = (e) => {
		const { name, type, value, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value, // handle both checkbox and field inputs
		});
	};

	const handleFuelTypeChange = (fuelType: string) => {
		if (fuelType === "Manual") {
			setFormData({
				...formData,
				fuelType,
				fuelSource: "manual",
			});
		} else {
			const selectedFuel = fuelData.find((fuel) => fuel.type === fuelType);
			setFormData({
				...formData,
				fuelType,
				fuelPrice: selectedFuel ? selectedFuel.price.toString() : "",
				fuelSource: "api",
			});
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const distance = parseFloat(formData.distance);
		const fuelEfficiency = parseFloat(formData.fuelEfficiency);
		let fuelPrice: number;

		if (formData.fuelSource === "api") {
			const selectedFuel = fuelData.find(
				(fuel) => fuel.type === formData.fuelType
			);
			fuelPrice = selectedFuel
				? selectedFuel.price
				: parseFloat(formData.fuelPrice);
		} else {
			fuelPrice = parseFloat(formData.fuelPrice);
		}

		const newErrors: TErrors = {};

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

		if (formData.fuelSource === "manual") {
			if (!formData.fuelPrice) {
				newErrors.fuelPrice = "Please set fuel price";
			} else if (isNaN(fuelPrice)) {
				newErrors.fuelPrice = "Must be a number";
			} else if (fuelPrice < 1) {
				newErrors.fuelPrice = "Must be at least 1";
			}
		} else if (!formData.fuelType) {
			newErrors.fuelPrice = "Please select a fuel type";
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
							errors={validationErrors}
						/>
						<Fuel
							formData={formData}
							onInputChange={handleInputChange}
							errors={validationErrors}
							fuelData={fuelData}
							loading={loading}
							apiError={apiError}
							onFuelTypeChange={handleFuelTypeChange}
						/>
						<CalcPriceButton />
					</Box>
				</form>
				<Price price={price} />
			</Container>
		</>
	);
}
