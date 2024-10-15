"use client";

import StarsAndSpotlight from "./hero-components/stars-spotlight";

const Hero = () => {
	return (
		<section className="relative w-full">
			<div className="fixed inset-0 -z-10">
				<StarsAndSpotlight />
			</div>
		</section>
	);
};

export default Hero;
