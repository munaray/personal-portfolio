import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
	return (
		<div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
			<StarsBackground
				starDensity={0.001}
				twinkleProbability={1}
				minTwinkleSpeed={0.25}
				className="bg-[#020d1c]"
			/>
			<ShootingStars
				minDelay={1200}
				maxSpeed={15}
				starColor="#FFF"
				trailColor=""
				starWidth={20}
				starHeight={3}
			/>
		</div>
	);
};

export default Hero;
