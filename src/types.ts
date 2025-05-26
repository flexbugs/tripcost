export type TFormData = {
	distance: string;
	twoWayTrip: boolean;
	fuelEfficiency: string;
	fuelPrice: string;
};

export type TFuelData = {};

export type TValidationErrors = {
	distance?: string;
	fuelEfficiency?: string;
	fuelPrice?: string;
};

export type TPrice = string | number;

export type TChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
