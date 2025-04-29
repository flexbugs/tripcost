export type FormData = {
	distance: string | number;
	twoWayTrip: boolean;
	fuelEfficiency: string | number;
	fuelPrice: string | number;
};

export type ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
