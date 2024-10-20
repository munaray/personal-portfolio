"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Intro: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
	const container = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();

			tl.from("#intro-slider", {
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
				className="h-screen p-10 bg-orange-500 uppercase absolute top-0 left-0 font-spaceGrotesk font-bold z-[200] w-full flex flex-col justify-center items-center tracking-tight text-3xl md:text-6xl lg:text-7xl">
				<h1 id="title-1" className="invisible opacity-0">
					Hello There <span className="waving-hand">👋</span>
				</h1>
				<h1 id="title-2" className="invisible opacity-0 -mt-20">
					my name is Abdulsalam Sa&apos;ad
				</h1>
				<h1 id="title-3" className="invisible opacity-0 -mt-20">
					Welcome To My Personal Portfolio
				</h1>
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
