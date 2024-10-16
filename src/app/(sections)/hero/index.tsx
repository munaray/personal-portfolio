"use client";


import StarsAndSpotlight from "./stars-spotlight";

const Hero = () => {
	return (
		<section id="home" className="w-full relative">
			<StarsAndSpotlight />
			<div className="z-100 absolute top-[30vh] left-[20vw] right-[10vw]">
				<section className="flex gap-10">
					{/* Right side */}
					<article className="flex-1">Name</article>

					{/* Left Side */}
					<figure className="flex-1">globe</figure>
				</section>
			</div>
		</section>
	);
};

export default Hero;
