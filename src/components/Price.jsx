import { Box, Typography } from "@mui/material";

export default function Price() {
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
			<Typography variant="h4">[PRICE]</Typography>
		</Box>
	);
}
