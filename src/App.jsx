import CalcPriceButton from "./components/CalcPriceButton";
import Trip from "./components/Trip";
import Fuel from "./components/Fuel";
import { Typography } from "@mui/material";
import "./App.css";

function App() {
	return (
		<>
			<Typography variant="h3">TripCost</Typography>
			<form>
				<Trip />
				<Fuel />
				<CalcPriceButton />
			</form>
		</>
	);
}

export default App;
