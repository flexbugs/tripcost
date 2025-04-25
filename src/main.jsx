import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./index.css";
import App from "./App.jsx";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={darkTheme}>
			<App />
		</ThemeProvider>
	</StrictMode>
);
