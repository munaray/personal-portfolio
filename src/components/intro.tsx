"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Intro: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
	const container = useRef(null);
	const timeline = useRef(gsap.timeline());

	// Skip function to stop animation and go directly to explore button
	const skipIntro = () => {
		timeline.current?.progress(1); // Jumps the animation to its end
		gsap.set("#intro-slider", { xPercent: "-100" });
		gsap.set("#explore", { opacity: 1 });
	};

	// GSAP intro animation sequence
	useGSAP(
		() => {
			timeline.current = gsap.timeline();

			timeline.current
				.from("#intro-slider", {
					xPercent: "-100",
					duration: 1.3,
					delay: 0.3,
				})
				.to("#title-1", {
					visibility: "visible",
					opacity: 1,
					y: "+=30",
					duration: 1.5,
				})
				.to("#title-1", {
					opacity: 0,
					y: "-=30",
					delay: 1.5,
					duration: 1.5,
				})
				.to("#title-2", {
					visibility: "visible",
					opacity: 1,
					y: "+=30",
					duration: 1.5,
				})
				.to("#title-2", {
					opacity: 0,
					y: "-=30",
					delay: 1.5,
					duration: 1.5,
				})
				.to("#title-3", {
					visibility: "visible",
					opacity: 1,
					y: "+=30",
					duration: 1.5,
				})
				.to("#title-3", {
					opacity: 0,
					y: "-=30",
					delay: 1.5,
					duration: 1.5,
				})
				.to("#intro-slider", {
					xPercent: "-100",
					duration: 1.3,
				})
				.from("#explore", {
					opacity: 0,
					duration: 0.5,
				});
		},
		{ scope: container }
	);

	return (
		<div className="relative" ref={container}>
			<div
				id="intro-slider"
				className="h-screen bg-orange-500 absolute top-0 left-0 z-[200] w-full flex flex-col justify-center items-center">
				<div className="uppercase font-spaceGrotesk text-center font-bold tracking-tight max-w-7xl mx-auto text-3xl md:text-6xl">
					<h1 id="title-1" className="invisible opacity-0">
						Hello There <span className="waving-hand">👋</span>
					</h1>
					<h1 id="title-2" className="invisible opacity-0 -mt-20">
						I&apos;m Abdulsalam Sa&apos;ad, it&apos;s great to have
						you here!
					</h1>
					<h1 id="title-3" className="invisible opacity-0 -mt-20">
						Welcome To My Personal Portfolio where I bring ideas to
						life.
					</h1>
				</div>
				{/* Skip Button */}
				<button
					onClick={skipIntro}
					className="absolute bottom-10 right-10 p-2 bg-gray-700 text-white font-bold rounded-md hover:bg-gray-500 transition-all">
					Skip
				</button>
			</div>
			<div className="h-screen flex place-items-center bg-[#020d1c] overflow-hidden">
				<button
					id="explore"
					onClick={onExplore}
					className="glowing-btn mx-auto font-spaceGrotesk">
					<span className="glowing-txt">
						C<span className="faulty-letter">L</span>ICK
						<span className="faulty-letter mx-1">TO</span>E
						<span className="faulty-letter">XP</span>LORE
					</span>
				</button>
			</div>
		</div>
	);
};

export default Intro;
