import React from "react";
import { Box, Button } from "@mui/material";

export default function CalcPriceButton() {
	return (
		<Box id="CalcPriceButton">
			<Button type="submit" variant="contained" size="large">
				Calculate price
			</Button>
		</Box>
	);
}
