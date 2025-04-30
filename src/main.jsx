import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import App from "./App.jsx";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					h3: "h1",
				},
			},
		},
	},
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</StrictMode>
);
