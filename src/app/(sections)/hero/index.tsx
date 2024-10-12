import StarsAndSpotlight from "./hero-components/stars-spotlight";
import Header from "./hero-components/header";

const Hero = () => {
	return (
		<div className="relative w-full">
			<div className="absolute">
				<Header />
			</div>
			<StarsAndSpotlight />
		</div>
	);
};

export default Hero;
