import React from "react";
import { IButtonProps } from "helpers/interface";

const Button: React.FC<IButtonProps> = ({
	title,
	className,
	children,
	atClick,
	color,
	disabled
}): JSX.Element => (
	<button
		className={(color ? `btn-${color}` : 'btn') + (disabled ? ' btn--disabled' : '') + " pd-10 pd-left-20 pd-right-20 border-none br-5 pointer tr-200 " + (className ? className : '')}
		title={title || ""}
		onClick={atClick}
	>
		{ children }
	</button>
);

export default Button;