import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Spotlight } from "@/components/ui/spot-light";

const StarsAndSpotlight = () => {
	return (
		<figure className="relative top-0 left-0 min-h-screen w-full overflow-hidden ">
			<Spotlight
				className="top-20 left-5 md:top-10 md:left-20 h-[80vh] w-[50vw]"
				fill="rgba(255, 120, 50, 0.5)"
			/>

			<Spotlight
				className="top-40 left-full h-[80vh] w-[50vw]"
				fill="rgba(255, 70, 50, 0.5)"
			/>

			<Spotlight
				className="top-28 left-[50%] transform -translate-x-1/2 h-[80vh] w-[50vw]"
				fill="rgba(255, 180, 90, 0.4)"
			/>

			<Spotlight
				className="bottom-10 left-[50%] transform -translate-x-1/2 h-[50vh] w-[50vw]"
				fill="rgba(255, 50, 50, 0.4)"
			/>
			<StarsBackground
				starDensity={0.0003}
				twinkleProbability={1}
				minTwinkleSpeed={0.25}
				className="bg-[#020d1c] min-h-screen"
			/>

			<ShootingStars
				starColor="#FF6A00"
				trailColor="#2EB9DF"
				className="min-h-screen"
			/>
			<ShootingStars
				starColor="#FF6A00"
				trailColor="#2EB9DF"
				className="min-h-screen"
			/>
			<ShootingStars
				starColor="#FF6A00"
				trailColor="#2EB9DF"
				className="min-h-screen"
			/>
			<ShootingStars
				starColor="#FF6A00"
				trailColor="#2EB9DF"
				className="min-h-screen"
			/>
			<ShootingStars
				starColor="#fff"
				trailColor="#2EB9DF"
				className="min-h-screen"
			/>
		</figure>
	);
};

export default StarsAndSpotlight;
