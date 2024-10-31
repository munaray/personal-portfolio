"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "react-responsive";
import Globe from "react-globe.gl";
import { useEffect, useState } from "react";
// import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

import StarsAndSpotlight from "./stars-spotlight";
import { techIcons, TechIconsProps } from "@/constants";
import TextReveal from "@/components/text-reveal";

const Hero = () => {
	const [isMounted, setIsMounted] = useState(false);
	// const [isLargeScreen, setIsLargeScreen] = useState(false);
	const isTablet = useMediaQuery({
		query: "(min-width: 768px) and (max-width: 1029px)",
	});
	const isDesktop = useMediaQuery({ query: "(min-width: 1030px)" });
	const [isSelectedTool, setIsSelectedTool] = useState<TechIconsProps | null>(
		null
	);

	useEffect(() => {
		setIsMounted(true);

		const handleDoubleClick = () => setIsSelectedTool(null);

		document.addEventListener("dblclick", handleDoubleClick);
		return () => {
			document.removeEventListener("dblclick", handleDoubleClick);
		};
	}, []);

	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		const handleResize = () =>
	// 			setIsLargeScreen(window.innerWidth >= 1024);
	// 		handleResize();
	// 		window.addEventListener("resize", handleResize);
	// 		return () => window.removeEventListener("resize", handleResize);
	// 	}
	// }, []);

	if (!isMounted) {
		return null;
	}

	return (
		// <Parallax speed={-10}>
		<section id="home" className="w-full relative h-[110vh]">
			<StarsAndSpotlight />
			<div className="z-100 absolute top-[20vh] left-[10vw] md:left-[20vw] lg:left-[12vw] right-[10vw]">
				<section className="grid gap-16 lg:grid-cols-5">
					{/* Right side */}

					<div
					// speed={isLargeScreen ? -5 : -2}
					// translateY={isLargeScreen ? [-20, 20] : [-10, 10]}
					// translateX={isLargeScreen ? [-10, 10] : [0, 0]}
					// className="lg:col-span-3 md:pb-10 lg:pb-0 lg:mt-8"
					>
						<article>
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
									className="font-bold font-spaceGrotesk text-xl md:text-2xl !lg:text-4xl text-gray-400 italic"
								/>
								<h1 className="text-2xl md:text-4xl mb-1 text-white font-spaceGrotesk uppercase font-bold mt-2">
									Hi, I&apos;m
									<span className="text-3xl md:text-7xl 2xl:text-9xl block text-orange-500">
										Abdulsalam Sa&apos;ad
									</span>
								</h1>
							</motion.div>
							<TextReveal triggerOnScroll={false}>
								<p className="text-sm md:text-lg text-gray-400 mt-4 max-w-[50ch]">
									A full-stack software engineer and designer
									with expertise in Linux systems, cloud
									architecture, DevOps, and blockchain. Beyond
									engineering, I bring artistry to my work,
									using 3D design and interactive media to
									craft innovative, functional solutions.
								</p>
							</TextReveal>
						</article>
					</div>

					{/* Left Side */}
					<div
					// speed={isLargeScreen ? -10 : -5}
					// translateY={isLargeScreen ? [-15, 15] : [-5, 5]}
					// translateX={isLargeScreen ? [0, 10] : [0, 0]}
					// easing="easeInOutBack"
					// className="lg:col-span-2 absolute top-60 lg:top-[-10vh] lg:left-[38vw]"
					>
						<figure>
							{techIcons && techIcons.length > 0 && (
								<div className="globe-container">
									<Globe
										// height and width based on screen size
										height={
											isDesktop
												? 750
												: isTablet
												? 650
												: 500
										}
										width={
											isDesktop
												? 650
												: isTablet
												? 550
												: 350
										}
										backgroundColor="#ffffff00"
										animateIn
										waitForGlobeReady
										globeImageUrl={"/globe.jpg"}
										showGraticules
										atmosphereColor="#020d1c"
										labelsData={
											techIcons as TechIconsProps[]
										}
										labelLat={(d) =>
											(d as TechIconsProps).lat
										}
										labelLng={(d) =>
											(d as TechIconsProps).lng
										}
										labelText={(d) =>
											(d as TechIconsProps).name
										}
										labelColor={() => "transparent"}
										labelSize={0}
										labelDotRadius={0.3}
										onLabelClick={(label) =>
											label &&
											setIsSelectedTool(
												label as TechIconsProps
											)
										}
										htmlElementsData={
											techIcons as TechIconsProps[]
										}
										htmlLat={(d) =>
											(d as TechIconsProps).lat
										}
										htmlLng={(d) =>
											(d as TechIconsProps).lng
										}
										htmlElement={(d) => {
											if (
												!d ||
												!(d as TechIconsProps).icon
											)
												return document.createElement(
													"div"
												);

											const el =
												document.createElement("img");
											el.src = (d as TechIconsProps).icon;
											el.alt =
												(d as TechIconsProps).name ||
												"icon";
											el.style.width = "30px";
											el.style.height = "30px";
											return el;
										}}
										htmlTransitionDuration={500}
									/>
								</div>
							)}

							{isSelectedTool && (
								<div className="relative md:-top-[26rem] -top-[18rem] left-16 md:left-40 z-[500] rounded-lg glass text-xs w-[75%] md:w-[50%] flex flex-col gap-2 p-6">
									<h3>{isSelectedTool.name}</h3>
									<p>{isSelectedTool.details}</p>

									<p>Use cases of {isSelectedTool.name}:</p>
									<ul className="flex flex-col gap-1.5">
										{isSelectedTool.useCases &&
											isSelectedTool.useCases.map(
												(useCase, index) => (
													<li key={index}>
														{useCase}
													</li>
												)
											)}
									</ul>
									<Link
										href={isSelectedTool.href}
										target="_blank">
										<button className="flex justify-center items-center w-[40%] mx-auto bg-orange-500 px-2 py-1 mt-1 text-white font-bold font-spaceGrotesk hover:text-white hover:bg-gray-500 transition-all duration-500">
											Learn More
										</button>
									</Link>
								</div>
							)}
						</figure>
					</div>
				</section>
			</div>
		</section>
		// </Parallax>
	);
};

export default Hero;
