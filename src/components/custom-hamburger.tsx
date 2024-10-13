import { useState } from "react";

const CustomHamburger = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<button
			className="button relative overflow-hidden bg-background/60 custom-bg flex justify-center items-center rounded-full"
			aria-controls="primary-navigation"
			aria-expanded={isExpanded}
			onClick={handleToggle}>
			<svg
				stroke="currentColor"
				fill="none"
				className={`hamburger transition-transform duration-1000 ${
					isExpanded ? "rotate-90" : ""
				}`}
				style={{
					transformOrigin: "center",
				}}
				viewBox="-10 -10 120 120"
				width="50">
				<path
					className={`line transition-all duration-1000 ${
						isExpanded
							? "stroke-dasharray-[60_105_60_300] stroke-dashoffset-[-90]"
							: "stroke-dasharray-[60_31_60_300]"
					}`}
					strokeWidth="10"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M 20 40 H 80 a 1 1 0 0 1 0 20 H 20 a 1 1 0 0 1 0 -40 H 50 V 110"></path>
			</svg>
		</button>
	);
};

export default CustomHamburger;
