export type TFuelData = {
	type: string;
	price: number;
};

export type TFormData = {
	distance: string;
	twoWayTrip: boolean;
	fuelEfficiency: string;
	fuelType: string;
	fuelPrice: string;
	fuelSource: "api" | "manual";
};

export type TErrors = {
	distance?: string;
	fuelEfficiency?: string;
	fuelPrice?: string;
};

export type TPrice = string | number;

export type TChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
