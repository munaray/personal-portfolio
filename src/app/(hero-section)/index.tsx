import React from "react";

import StarsAndSpotlight from "./(components)/stars-spotlight";

const Hero = () => {
	return (
		<div className="relative w-full">
			<div className="absolute z-10 max-w-7xl mx-auto">
				Hello wonderful people
			</div>
			<StarsAndSpotlight />
		</div>
	);
};

export default Hero;
