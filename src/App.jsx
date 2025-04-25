import CalcPriceButton from "./components/CalcPriceButton";
import Trip from "./components/Trip";
import Fuel from "./components/Fuel";
import Price from "./components/Price";
import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import { useState } from "react";

export default function App() {
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
			[name]: type === "checkbox" ? checked : value, // handle both checkbox and field inputs
		});
	}

	function handleSubmit(e) {
		e.preventDefault();

		const tripPrice = Number(
			(formData.distance / formData.fuelEfficiency) * formData.fuelPrice
		).toFixed(2);

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
				<Typography variant="h3">TripCost</Typography>
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
						<Fuel onInputChange={handleInputChange} />
						<CalcPriceButton />
					</Box>
				</form>
				<Price price={price} />
			</Container>
		</>
	);
}
