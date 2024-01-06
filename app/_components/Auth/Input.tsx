import clsx from "clsx";

interface IInput {
	type?: string;
	icon?: string;
	placeholder?: string;
	disabled?: boolean;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
	type = "text",
	icon,
	placeholder = "",
	disabled = false,
	value,
	onChange,
}: IInput) {
	return (
		<div
			className={clsx(
				"border border-light rounded-full h-11 flex items-center gap-1.5 px-4",
				disabled ? "bg-light/35" : "bg-white",
			)}>
			{icon && <img className="fill-[black]" src={`/icons/${icon}.svg`} />}
			<input
				className={clsx(
					"placeholder:text-light text-[18px]",
					disabled ? "text-[#6f6f6f]" : "text-mainDark",
				)}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e)}
				disabled={disabled}
			/>
		</div>
	);
}
