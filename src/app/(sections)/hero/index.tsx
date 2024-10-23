"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "react-responsive";
import Globe from "react-globe.gl";

import StarsAndSpotlight from "./stars-spotlight";
import { useEffect, useState } from "react";

const Hero = () => {
	const [isMounted, setIsMounted] = useState(false);
	const isTabletAndAbove = useMediaQuery({ query: "(min-width: 768px)" });

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<section id="home" className="w-full relative h-[110vh]">
			<StarsAndSpotlight />
			<div className="z-100 absolute top-[20vh] left-[10vw] md:left-[20vw] lg:left-[12vw] right-[10vw]">
				<section className="grid gap-16 lg:grid-cols-5">
					{/* Right side */}
					<article className="lg:col-span-3 md:pb-10 lg:pb-0">
						<motion.div
							initial={{ opacity: 0, y: -50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 1, delay: 3 }}>
							<TypeAnimation
								sequence={[
									"Fullstack Dev",
									1000,
									"Linux SysEng",
									1000,
									"Database Admin",
									1000,
									"DevOps",
									1000,
									"Blockchain Dev",
									1000,
									"Cloud Eng & Arch (AWS, GCP)",
									1000,
									"3D & Graphic Designer",
									1000,
									"Generative AI",
									1000,
									"Aspiring Chef",
									1000,
									"Poet",
									1000,
								]}
								speed={50}
								repeat={Infinity}
								className="font-bold font-spaceGrotesk text-xl md:text-2xl text-gray-400 italic"
							/>
							<motion.h1 className="text-3xl md:text-6xl uppercase font-bold font-spaceGrotesk mt-2 text-orange-500">
								<span className="block text-2xl md:text-4xl mb-1 text-white">
									Hi, I&apos;m
								</span>
								Abdulsalam Sa&apos;ad
							</motion.h1>
							<p className="text-sm md:text-base text-gray-400 mt-4">
								A passionate and creative full-stack software
								engineer and designer. With expertise spanning
								Linux system engineering, database
								administration, DevOps, cloud architecture,
								blockchain development, and generative AI, I
								also bring a unique touch of artistry through 3D
								models and interactive design. I&apos;m driven
								to craft innovative solutions that blend
								functionality with creativity, pushing the
								boundaries of both tech and design.
							</p>
						</motion.div>
					</article>
					{/* Left Side */}
					<figure className="lg:col-span-2 absolute top-72 -left-10 md:-left-0 md:py-24 py-6">
						{isTabletAndAbove ? (
							<Globe
								height={500}
								width={500}
								backgroundColor="#ffffff00"
							/>
						) : (
							<Globe
								height={350}
								width={350}
								backgroundColor="#ffffff00"
								animateIn
								waitForGlobeReady
								globeImageUrl={"/globe.jpg"}
								showGraticules
								atmosphereColor="#020d1c"
							/>
						)}
					</figure>
				</section>
			</div>
		</section>
	);
};

export default Hero;
