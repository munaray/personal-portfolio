import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import React from "react";

const Hero = () => {
	return (
		<div className="relative w-full max-w-7xl mx-auto">
			<div className="relative z-10">Hello wonderful people</div>
			<StarsBackground
				starDensity={0.001}
				twinkleProbability={1}
				minTwinkleSpeed={0.25}
				className="bg-[#020d1c] min-h-screen"
			/>
			<ShootingStars
				minDelay={1200}
				maxSpeed={15}
				starColor="#FFF"
				trailColor=""
				starWidth={20}
				starHeight={3}
				className="min-h-screen"
			/>
		</div>
	);
};

export default Hero;
