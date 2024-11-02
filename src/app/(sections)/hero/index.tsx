"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "react-responsive";
import Globe from "react-globe.gl";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

import StarsAndSpotlight from "./stars-spotlight";
import { techIcons, TechIconsProps } from "@/constants";
import TextReveal from "@/components/text-reveal";

const Hero = () => {
	const [isMounted, setIsMounted] = useState(false);
	// const [isDesktop, setIsLargeScreen] = useState(false);
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
	// 			setIsLargeScreen(window.innerWidth >= 1030);
	// 		handleResize();
	// 		window.addEventListener("resize", handleResize);
	// 		return () => window.removeEventListener("resize", handleResize);
	// 	}
	// }, []);

	if (!isMounted) {
		return null;
	}

	return (
		<Parallax speed={-10}>
			<section id="home" className="w-full relative h-[110vh]">
				<StarsAndSpotlight />
				<div className="z-100 absolute top-[20vh] left-[10vw] md:left-[20vw] lg:left-[12vw] right-[10vw]">
					<section className="grid gap-16 lg:grid-cols-5">
						{/* Right side */}

						<Parallax
							speed={isDesktop ? -5 : -2}
							translateY={isDesktop ? [-20, 20] : [-10, 10]}
							translateX={isDesktop ? [0, 10] : [0, 0]}
							className="lg:col-span-3 md:pb-10 lg:pb-0 lg:mt-8">
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
										A full-stack software engineer and
										designer with expertise in Linux
										systems, cloud architecture, DevOps, and
										blockchain. Beyond engineering, I bring
										artistry to my work, using 3D design and
										interactive media to craft innovative,
										functional solutions.
									</p>
								</TextReveal>
							</article>
						</Parallax>

						{/* Left Side */}
						<Parallax
							speed={isDesktop ? -10 : -5}
							translateY={isDesktop ? [-15, 15] : [-5, 5]}
							easing="easeInOutBack"
							className="md:mt-32 globe-container mt-8 lg:mt-0 lg:col-span-2 absolute top-60 md:top-72 lg:top-[-10vh] lg:left-[35vw]">
							<figure className="">
								<Globe
									height={
										isDesktop ? 650 : isTablet ? 550 : 350
									}
									width={
										isDesktop ? 650 : isTablet ? 550 : 350
									}
									backgroundColor="#ffffff00"
									animateIn
									waitForGlobeReady
									globeImageUrl={"/globe.jpg"}
									showGraticules
									atmosphereColor="#020d1c"
									// For clicking handling
									labelsData={techIcons as TechIconsProps[]}
									labelLat={(d) => (d as TechIconsProps).lat}
									labelLng={(d) => (d as TechIconsProps).lng}
									labelText={(d) =>
										(d as TechIconsProps).name
									} // Add simple text for hover, or empty string for no text
									labelColor={() => "transparent"} // Hide label text
									labelSize={0} // Hide text marker
									labelDotRadius={0.3}
									onLabelClick={(label) =>
										setIsSelectedTool(
											label as TechIconsProps
										)
									}
									// For icon display
									htmlElementsData={
										techIcons as TechIconsProps[]
									}
									htmlLat={(d) => (d as TechIconsProps).lat}
									htmlLng={(d) => (d as TechIconsProps).lng}
									htmlElement={(d) => {
										const el =
											document.createElement("img");

										el.src = (d as TechIconsProps).icon;
										el.alt = (d as TechIconsProps).name;
										el.style.width = "30px";
										el.style.height = "30px";
										return el;
									}}
									htmlTransitionDuration={500}
								/>

								{isSelectedTool && (
									<div className="relative md:-top-[26rem] -top-[18rem] left-16 md:left-40 z-[500] rounded-lg glass text-xs w-[75%] md:w-[50%] flex flex-col gap-2 p-6">
										<h3>{isSelectedTool.name}</h3>
										<p>{isSelectedTool.details}</p>

										<p>
											Use cases of {isSelectedTool.name}:
										</p>
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
						</Parallax>
					</section>
				</div>
			</section>
		</Parallax>
	);
};

export default Hero;
