import { Box, Typography } from "@mui/material";

export default function Price({ price }) {
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
