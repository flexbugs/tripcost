export type TFormData = {
	distance: string;
	twoWayTrip: boolean;
	fuelEfficiency: string;
	fuelPrice: string;
};

export type TFuelData = {
	date: string;
	prices: {
		"Blyfri 95": number;
		"Oktan 100": number;
		Diesel: number;
	};
};

export type TSelectedFuelTypes =
	| "Blyfri 95"
	| "Oktan 100"
	| "Diesel"
	| "Custom";

export type TValidationErrors = {
	distance?: string;
	fuelEfficiency?: string;
	fuelPrice?: string;
};

export type TApiError = string | null;

export type TPrice = string | number;

export type TChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
