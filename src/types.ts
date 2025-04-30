export type FormData = {
	// Allowing string for empty "" value to display field label
	distance: string | number;
	twoWayTrip: boolean;
	fuelEfficiency: string | number;
	fuelPrice: string | number;
};

export type Errors = {
	distance?: string;
	fuelEfficiency?: string;
	fuelPrice?: string;
};

export type ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
