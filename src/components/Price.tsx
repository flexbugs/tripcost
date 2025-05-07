import React from "react";
import { Box, Typography } from "@mui/material";
import { TPrice } from "../types";

type PriceProps = {
	price: TPrice;
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
