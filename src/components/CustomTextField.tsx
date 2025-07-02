// src/components/CustomTextField.tsx
import { TextField, TextFieldProps } from "@mui/material";
import { TFormData, TValidationErrors, TChangeEvent } from "../types";

type CustomTextFieldProps = Omit<
	TextFieldProps,
	"onChange" | "error" | "value"
> & {
	name: string;
	formData: TFormData;
	onInputChange: TChangeEvent;
	validationErrors: TValidationErrors;
	numeric?: boolean; // Optional flag to add numeric input props
};

export default function CustomTextField({
	name,
	formData,
	onInputChange,
	validationErrors,
	numeric = true,
	label,
	...rest
}: CustomTextFieldProps) {
	// Get the value from formData using the name prop
	const value = formData[name as keyof TFormData];

	// Get the validation error using the name prop
	const error = !!validationErrors[name as keyof TValidationErrors];
	const helperText = validationErrors[name as keyof TValidationErrors];

	// Add numeric input props if needed
	const numericProps = numeric
		? {
				slotProps: {
					htmlInput: {
						type: "text",
						inputMode: "numeric",
						pattern: "[0-9]*",
					},
				},
		  }
		: {};

	return (
		<TextField
			aria-required
			label={label || `${name} *`}
			name={name}
			value={value}
			onChange={onInputChange}
			error={error}
			helperText={helperText}
			{...numericProps}
			{...rest}
		/>
	);
}
