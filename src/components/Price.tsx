import React from "react";
import { Box, Typography } from "@mui/material";

type PriceProps = {
	price: number;
};

export default function Price({ price }: PriceProps) {
	return (
		<Box
			id="Price"
			sx={{
				height: 100,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography variant="h4">{price}</Typography>
		</Box>
	);
}
