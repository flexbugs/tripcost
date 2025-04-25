import CalcPriceButton from "./components/CalcPriceButton";
import Trip from "./components/Trip";
import Fuel from "./components/Fuel";
import Price from "./components/Price";
import { Box, Container, Typography } from "@mui/material";
import "./App.css";

export default function App() {
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
				<form>
					<Box
						id="inner-container"
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 4,
						}}
					>
						<Trip />
						<Fuel />
						<CalcPriceButton />
					</Box>
				</form>
				<Price />
			</Container>
		</>
	);
}
